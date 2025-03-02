const express = require('express');
const app = express();
const path = require('path');

// Configure EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS/JS/images)
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.render('index', { 
    message: 'Hello World from Arjun Bishnoi!',
    year: new Date().getFullYear()
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
