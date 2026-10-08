const express = require('express');
const app = express();
const router = require('./src/routes/index.route');
const PORT = 3000;
const requestLogger = require('./src/middleware/customLogger');

app.use(requestLogger);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello  Bootcamp Students! How is Life');
});

app.use('/api/v1', router);

app.use((err, req, res, next) => {
  console.error(`[Error] ${err.message}`);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    data: null
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

