#!/bin/bash
# Comprehensive debug and fix script for arjunbishnoi.com

# Set to exit on error and print commands as they're executed
set -e
set -x

echo "==== STARTING COMPREHENSIVE DEBUG AND FIX ===="
date

echo "==== CHECKING SYSTEM INFO ===="
uname -a
id
pwd
echo "Current directory: $(pwd)"

echo "==== CHECKING IF /arjunbishnoi EXISTS ===="
if [ -d "/arjunbishnoi" ]; then
  echo "/arjunbishnoi directory exists"
  ls -la /arjunbishnoi
else
  echo "ERROR: /arjunbishnoi directory does not exist!"
  echo "Available directories in root:"
  ls -la /
fi

# Navigate to the correct directory (creates if doesn't exist)
echo "==== SETTING UP DIRECTORY ===="
sudo mkdir -p /arjunbishnoi
sudo chown -R ubuntu:ubuntu /arjunbishnoi
cd /arjunbishnoi
echo "Now in: $(pwd)"

echo "==== CHECKING NGINX CONFIGURATION ===="
if [ -f "/etc/nginx/sites-available/arjunbishnoi.com" ]; then
  echo "NGINX config exists:"
  cat /etc/nginx/sites-available/arjunbishnoi.com
else
  echo "NGINX config does not exist, creating it now"
fi

echo "==== CHECKING NGINX STATUS ===="
sudo systemctl status nginx || true

echo "==== CREATING FRESH NGINX CONFIG ===="
sudo tee /etc/nginx/sites-available/arjunbishnoi.com > /dev/null << 'EOL'
server {
    listen 80;
    server_name arjunbishnoi.com www.arjunbishnoi.com;

    # Root directory 
    root /arjunbishnoi/.output/public;
    index index.html;
    
    # Debug logs
    error_log /var/log/nginx/arjunbishnoi.error.log debug;
    access_log /var/log/nginx/arjunbishnoi.access.log;
    
    # Allow all permissions during debug
    location / {
        autoindex on;
        try_files $uri $uri/ /index.html;
    }
}
EOL

echo "==== ENABLING SITE AND NGINX ===="
sudo ln -sf /etc/nginx/sites-available/arjunbishnoi.com /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl status nginx || true

echo "==== CHECKING IF .output/public DIRECTORY EXISTS ===="
if [ -d ".output/public" ]; then
  echo ".output/public exists"
  ls -la .output/public
else
  echo ".output/public does not exist!"
  echo "Contents of current directory:"
  ls -la
  
  echo "==== CHECKING FOR NODE/NPM ===="
  node -v || true
  npm -v || true
  
  echo "==== SETTING UP NODE 18 ===="
  # Install Node.js 18
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  sudo apt-get install -y nodejs

  echo "==== REBUILDING APPLICATION ===="
  # If repository exists, pull latest
  if [ -d ".git" ]; then
    git pull origin main
  else
    # Clone the repo if it doesn't exist
    rm -rf * .[!.]* ..?*
    git clone https://github.com/arjunbishnoi/arjunbishnoi.com.git .
  fi
  
  # Install dependencies and build
  npm i
  npm run build
  
  # Check if build was successful
  if [ -d ".output/public" ]; then
    echo "Build successful!"
    ls -la .output/public
  else
    echo "Build failed! Contents of directory:"
    ls -la
  fi
fi

echo "==== FIXING PERMISSIONS ===="
sudo chown -R www-data:www-data .
sudo chmod -R 755 .
sudo find . -type f -exec chmod 644 {} \;

echo "==== CHECKING NGINX LOGS ===="
sudo tail -n 50 /var/log/nginx/error.log
sudo tail -n 50 /var/log/nginx/arjunbishnoi.error.log || true
sudo tail -n 50 /var/log/nginx/arjunbishnoi.access.log || true

echo "==== TEMPORARY DEBUG INDEX.HTML ===="
# Create a temporary index.html in the root to test Nginx
echo "<html><body><h1>Arjun Bishnoi - Test Page</h1><p>If you see this, Nginx is serving static files correctly.</p><p>Generated: $(date)</p></body></html>" | sudo tee /arjunbishnoi/test.html

echo "==== FIX COMPLETE ===="
echo "Visit http://arjunbishnoi.com or http://your-server-ip/test.html to test"
echo "Run 'sudo certbot --nginx -d arjunbishnoi.com -d www.arjunbishnoi.com' to set up SSL" 