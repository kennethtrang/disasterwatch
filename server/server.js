const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../index.html')));

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});

module.exports = app;
