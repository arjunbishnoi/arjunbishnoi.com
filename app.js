const express = require('express')
const favicon = require('serve-favicon');;
const app = express();
const path = require('path');

// Configure EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files (CSS/JS/images)
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.render('index', { 
    message: 'Hello World from Arjun Bishnoi!',
    year: new Date().getFullYear()
  });
});

// Serve favicon
app.use(favicon(path.join(__dirname, 'public', 'images', 'icons', 'favicon.ico')));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
// Test
