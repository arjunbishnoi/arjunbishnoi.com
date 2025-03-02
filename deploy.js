const express = require('express');
const http = require('http');
const { createHandler } = require('github-webhook-handler');
const { exec } = require('child_process');

const app = express();
const handler = createHandler({
  path: '/webhook',
  secret: 'YOUR_SECRET_TOKEN' // Generate with: openssl rand -hex 20
});

app.post('/webhook', (req, res) => {
  handler(req, res, err => {
    if(err) return res.status(500).send('Error');
    res.status(200).send('OK');
  });
});

handler.on('push', (event) => {
  console.log('Received push event!');
  exec('bash ~/deploy.sh', (error, stdout, stderr) => {
    if(error) console.error(`Error: ${error}`);
    console.log(`STDOUT: ${stdout}`);
    console.error(`STDERR: ${stderr}`);
  });
});

http.createServer(app).listen(9000, () => {
  console.log('Webhook listener running on port 9000');
});
