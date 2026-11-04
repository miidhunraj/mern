const express = require('express')
const app = express()
app.get('/users/:username/:age/:role', (req, res) => {
 const { username, age, role } = req.params
 res.send(`name is ${username} age is ${age} role is ${role}`)
}).listen(5000)
