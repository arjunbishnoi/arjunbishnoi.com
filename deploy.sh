#!/bin/bash

cd ~/arjunbishnoi
git pull origin main
npm install
pm2 restart app
echo "Deployment completed at $(date)"

