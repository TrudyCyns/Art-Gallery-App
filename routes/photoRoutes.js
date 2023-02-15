const express = require('express');

const router = express.Router()

router.get('/', (req, res) => {
  res.send('You are connectes to the photo route now')
})

module.exports = router