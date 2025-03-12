#!/bin/bash

# Exit on error
set -e

# Navigate to the project directory
cd /home/ubuntu/arjunbishnoi.com

# Pull the latest changes from GitHub
git pull origin main

# Install dependencies
npm ci

# Build the application
npm run build

# Restart the application
# Using PM2 if available
if command -v pm2 &> /dev/null; then
  # If app is already running, reload it. Otherwise, start it
  pm2 reload arjunbishnoi.com 2>/dev/null || pm2 start .output/server/index.mjs --name arjunbishnoi.com
else
  # Direct systemd service approach (if you're using systemd)
  sudo systemctl restart arjunbishnoi.service
fi

echo "Deployment completed successfully!" 