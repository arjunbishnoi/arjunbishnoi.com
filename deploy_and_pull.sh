#!/bin/bash

# Go to the arjunbishnoi directory or create it if it doesn't exist
if [ ! -d "/arjunbishnoi" ]; then
  sudo mkdir -p /arjunbishnoi
  sudo chown -R ubuntu:ubuntu /arjunbishnoi
fi

cd /arjunbishnoi

# Check if the repository is already cloned
if [ -d ".git" ]; then
  echo "Git repository exists, pulling latest changes..."
  git pull
else
  echo "Cloning the repository..."
  git clone https://github.com/arjunbishnoi/arjunbishnoi.com.git .
fi

# Install dependencies
echo "Installing dependencies..."
sudo apt update
sudo apt install -y nginx nodejs npm certbot python3-certbot-nginx

# Set up Nginx configuration
echo "Configuring Nginx..."
sudo tee /etc/nginx/sites-available/arjunbishnoi.com > /dev/null << 'EOL'
server {
    listen 80;
    server_name arjunbishnoi.com www.arjunbishnoi.com;

    root /arjunbishnoi/.output/public;
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
sudo nginx -t
sudo systemctl restart nginx

# Set up systemd service
echo "Creating systemd service..."
sudo tee /etc/systemd/system/arjunbishnoi.service > /dev/null << 'EOL'
[Unit]
Description=Arjun Bishnoi Website
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/arjunbishnoi
ExecStart=/usr/bin/node /arjunbishnoi/.output/server/index.mjs
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
EOL

# Start and enable the service
sudo systemctl enable arjunbishnoi
sudo systemctl restart arjunbishnoi

# Set up SSL
echo "Setting up SSL..."
sudo certbot --nginx -d arjunbishnoi.com -d www.arjunbishnoi.com --non-interactive --agree-tos --email your-email@example.com

echo "Deployment completed! Your website should be accessible at https://arjunbishnoi.com" 