#!/bin/bash

# Exit on error
set -e

# Update and install dependencies
sudo apt update
sudo apt upgrade -y
sudo apt install -y nginx git certbot python3-certbot-nginx curl build-essential

# Install Node.js if not already installed (specifically v18 which is compatible)
if ! command -v node &> /dev/null; then
    echo "Installing Node.js 18.x..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt install -y nodejs
fi

# Verify Node.js and npm are installed correctly
node -v
npm -v

# Install PM2 globally for process management
sudo npm install -g pm2

# Clone repository (if not already cloned)
if [ ! -d "/home/ubuntu/arjunbishnoi.com" ]; then
    echo "Cloning repository..."
    git clone https://github.com/arjunbishnoi/arjunbishnoi.com.git /home/ubuntu/arjunbishnoi.com
else
    echo "Repository already exists, pulling latest changes..."
    cd /home/ubuntu/arjunbishnoi.com
    git pull origin main
fi

# Install dependencies and build application
cd /home/ubuntu/arjunbishnoi.com
echo "Installing dependencies..."
npm ci
echo "Building application..."
npm run build

# Set up Nginx
echo "Setting up Nginx..."
sudo cp /home/ubuntu/arjunbishnoi.com/nginx.conf /etc/nginx/sites-available/arjunbishnoi.com
sudo ln -sf /etc/nginx/sites-available/arjunbishnoi.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Set up SSL certificate with Certbot
echo "Setting up SSL with Certbot..."
sudo certbot --nginx -d arjunbishnoi.com -d www.arjunbishnoi.com --non-interactive --agree-tos --email your-email@example.com

# Set up systemd service
echo "Setting up systemd service..."
sudo cp /home/ubuntu/arjunbishnoi.com/arjunbishnoi.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable arjunbishnoi.service
sudo systemctl start arjunbishnoi.service

# Alternative: Start with PM2 and enable startup
# pm2 start .output/server/index.mjs --name arjunbishnoi.com
# pm2 save
# pm2 startup

echo "Setup completed successfully!"
echo "Your website should now be accessible at https://arjunbishnoi.com" 