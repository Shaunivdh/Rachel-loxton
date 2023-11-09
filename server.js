const express = require('express');
const path = require('path');

const app = express();

// Serve static files with a .js extension
app.use('/static/js', express.static(path.resolve(__dirname, 'frontend', 'static'), { extensions: ['js'] }));

// Handle other routes or middleware as needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
