const express = require('express');
const cors = require('cors');
require('dotenv').config()

const urlController = require('./controller/urlController')

const port = process.env.PORT || 2924;

const app = express();
app.use(express.json())
app.use(cors());

app.use('/', urlController)

app.get('/yes', (req, res) => {
    return res.status(200).send('Yes worked')
})




module.exports = {
    port,
    app
}