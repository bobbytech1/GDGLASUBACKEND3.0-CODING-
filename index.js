const express = require('express');
const app = express();
const PORT = 3000;
const userRoutes = require('./src/routes/user.route')

app.get('/', (req, res) => {
    res.send('Hello  Bootcamp Students! How is Life')
})

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)    
})