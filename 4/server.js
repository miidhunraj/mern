const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(__dirname));
app.post('/submit', (req, res) =>
{
 res.json({message:'data received', data:req.body})
});
app.listen(3000);
