#!/bin/bash
# EMERGENCY RESTORATION SCRIPT - MINIMAL CONFIGURATION TO RESTORE CONNECTIVITY

# Fail fast on errors
set -e

echo "==== EMERGENCY WEBSITE RESTORATION ===="

# 1. Check and create basic directory
sudo mkdir -p /arjunbishnoi
sudo chown -R ubuntu:ubuntu /arjunbishnoi
cd /arjunbishnoi

# 2. Create a minimal Nginx configuration that will definitely work
echo "Creating minimal Nginx configuration..."
sudo tee /etc/nginx/sites-available/arjunbishnoi.com > /dev/null << 'EOL'
server {
    listen 80;
    server_name arjunbishnoi.com www.arjunbishnoi.com;
    
    # Root directory - point to a guaranteed location
    root /var/www/html;
    
    # Simple configuration
    location / {
        try_files $uri $uri/ =404;
    }
}
EOL

# 3. Create a simple index.html in the root
echo "Creating emergency index.html..."
sudo mkdir -p /var/www/html
sudo tee /var/www/html/index.html > /dev/null << 'EOL'
<!DOCTYPE html>
<html>
<head>
    <title>Arjun Bishnoi</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 30px;
            text-align: center;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        h1 {
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Arjun Bishnoi</h1>
        <p>Website is currently under maintenance.</p>
        <p>We'll be back online soon!</p>
    </div>
</body>
</html>
EOL

# 4. Enable the site and restart Nginx
echo "Enabling site and restarting Nginx..."
sudo ln -sf /etc/nginx/sites-available/arjunbishnoi.com /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx

echo "==== EMERGENCY RESTORATION COMPLETE ===="
echo "Your site should now display a basic maintenance page at http://arjunbishnoi.com"
echo ""
echo "NEXT STEPS:"
echo "1. Verify the site is accessible with the maintenance page"
echo "2. Once confirmed, we can properly set up the Nuxt.js application" 