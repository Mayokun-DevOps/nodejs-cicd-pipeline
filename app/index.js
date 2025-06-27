const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('CI/CD Pipeline Deployed Successfully!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
