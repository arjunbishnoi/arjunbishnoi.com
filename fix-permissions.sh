#!/bin/bash
# Fix script for 403 Forbidden error on arjunbishnoi.com

echo "==== FIXING 403 FORBIDDEN ERROR ===="

# 1. Check if we're in the correct directory
cd /arjunbishnoi || { echo "Error: /arjunbishnoi directory doesn't exist"; exit 1; }

# 2. Fix permissions (recursive)
echo "Setting correct ownership and permissions..."
sudo chown -R www-data:www-data .
sudo chmod -R 755 .
sudo find . -type f -exec chmod 644 {} \;

# 3. Check Nginx configuration
echo "Verifying Nginx configuration..."
sudo cat > /etc/nginx/sites-available/arjunbishnoi.com << 'EOL'
server {
    listen 80;
    server_name arjunbishnoi.com www.arjunbishnoi.com;

    # Root directory - make sure this points to your built site
    root /arjunbishnoi/.output/public;
    index index.html;
    
    # Improved location directive
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Add proper headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";
}
EOL

# 4. Enable site and reload nginx
echo "Enabling site and reloading Nginx..."
sudo ln -sf /etc/nginx/sites-available/arjunbishnoi.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# 5. Check if .output/public directory exists
if [ ! -d ".output/public" ]; then
    echo "IMPORTANT: .output/public directory missing. Rebuilding application..."
    npm install
    npm run build
fi

# 6. Fix permissions again after build (if needed)
sudo chown -R www-data:www-data .output
sudo chmod -R 755 .output

echo "==== FIX COMPLETE ===="
echo "Please visit https://arjunbishnoi.com to verify the site is working now."
echo "If SSL isn't working, run: sudo certbot --nginx -d arjunbishnoi.com -d www.arjunbishnoi.com" 