const express = require('express');
const cors = require('cors')
const path = require('path');
const fs = require('fs');
const dbconnection = require('./database/connection.js')
const dotenv = require('dotenv')
const expRouter = require('./Routers/expRouter')
const regRouter = require('./Routers/regRouter');
const feedRouter = require('./Routers/feedRouter');

dotenv.config();
dbconnection()
const app = express();
const port = 3001;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Base routes -
app.use('/experience',expRouter);
app.use('/registation',regRouter);
app.use('/feedback',feedRouter);


app.get('/images/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'Images', filename);
  
    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        return res.status(404).send('File not found');
      }
  
      // Send the file
      res.sendFile(filePath);
    });
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})