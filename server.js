const express = require('express');

const app = express()

// Set up Server port
const port = 5000
app.listen(port, () => console.log(`Listening on port ${port}`))