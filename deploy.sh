#!/bin/bash

# Exit on error
set -e

echo "Starting deployment process..."

# Navigate to the project directory
cd /home/ubuntu/arjunbishnoi.com
echo "Current directory: $(pwd)"

# Pull the latest changes from GitHub
echo "Pulling latest changes from GitHub..."
git pull origin main

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the application
echo "Building application..."
npm run build

# Restart the application
echo "Restarting application..."
# Using PM2 if available
if command -v pm2 &> /dev/null; then
  echo "Using PM2 for process management..."
  # If app is already running, reload it. Otherwise, start it
  pm2 reload arjunbishnoi.com 2>/dev/null || pm2 start .output/server/index.mjs --name arjunbishnoi.com
  pm2 save
else
  echo "Using systemd for process management..."
  # Direct systemd service approach (if you're using systemd)
  sudo systemctl restart arjunbishnoi.service
  sudo systemctl status arjunbishnoi.service --no-pager
fi

echo "Deployment completed successfully!" 