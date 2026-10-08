const express = require('express');
const app = express();
const router = require('./src/routes/index.route');
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello  Bootcamp Students! How is Life');
});

app.use('/api/v1', router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

