require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.status(200).json({
    'variable 1:': process.env.V_ENV_1,
    'variable 2:': process.env.V_ENV_2,
    'variable 3:': process.env.V_ENV_3,
  }).send();
})

app.listen(3000, (err) => {
  if(!err)
    console.log('Server is running in port: ', 3000);
});
