const express = require('express');
const axios = require('axios');
require('dotenv').config()

const router = express.Router();

router.get('', (req, res) => {
    axios
        .get(process.env.API, {
            params: {
                url: req.query.url,
                custom: req.query.custom
            }
        })
        .then((re) => {
            console.log('re:', re.data)
            return res.status(201).send(re.data)
        })
        .catch((err) => {
            return res.status(400).send(err)

        });


})



module.exports = router;