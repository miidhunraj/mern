const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.post('/submit', (req, res) =>
{
 console.log('Received Data:', req.body);
 res.send('Data received! Check the console.');
});
app.listen(3000)
