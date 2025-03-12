#!/bin/bash

# Update system packages
echo "Updating system packages..."
sudo apt update
sudo apt upgrade -y

# Install Node.js, Nginx, and other requirements
echo "Installing Node.js, Nginx, and other dependencies..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs nginx certbot python3-certbot-nginx

# Verify installation
node -v
npm -v

# Create application directory
echo "Setting up application directory..."
sudo mkdir -p /var/www/arjunbishnoi.com
sudo chown -R ubuntu:ubuntu /var/www/arjunbishnoi.com

# Prepare the upload location
cd /var/www/arjunbishnoi.com
rm -rf ./* # Clean the directory if it exists

# Note: You'll need to upload your application files to this directory
# The next steps assume you've already uploaded your Nuxt.js build to this location

# Configure Nginx
echo "Configuring Nginx..."
sudo tee /etc/nginx/sites-available/arjunbishnoi.com > /dev/null << 'EOL'
server {
    listen 80;
    server_name arjunbishnoi.com www.arjunbishnoi.com;

    root /var/www/arjunbishnoi.com/.output/public;
    index index.html;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOL

# Enable the site
sudo ln -sf /etc/nginx/sites-available/arjunbishnoi.com /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Set up Let's Encrypt SSL
echo "Setting up SSL with Let's Encrypt..."
sudo certbot --nginx -d arjunbishnoi.com -d www.arjunbishnoi.com --non-interactive --agree-tos --email your-email@example.com

# Create a startup script for the Node.js application
echo "Creating startup service for the application..."
sudo tee /etc/systemd/system/arjunbishnoi.service > /dev/null << 'EOL'
[Unit]
Description=Arjun Bishnoi Website
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/var/www/arjunbishnoi.com
ExecStart=/usr/bin/node /var/www/arjunbishnoi.com/.output/server/index.mjs
Restart=on-failure
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=arjunbishnoi

[Install]
WantedBy=multi-user.target
EOL

# Enable and start the service
sudo systemctl enable arjunbishnoi
sudo systemctl start arjunbishnoi

echo "Deployment complete! Your website should be accessible at https://arjunbishnoi.com" 