const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'CI/CD Pipeline is working!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
