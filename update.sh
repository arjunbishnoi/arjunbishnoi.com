#!/bin/bash

# Go to the arjunbishnoi directory
cd /arjunbishnoi

# Pull the latest changes from GitHub
echo "Pulling the latest changes from GitHub..."
git pull

# Restart the service to apply the changes
echo "Restarting the service..."
sudo systemctl restart arjunbishnoi

echo "Update completed! Your website has been updated with the latest code." 