const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('/', (req:any, res:any) => {
    res.send('Hello Cam!')
  });

app.listen('3001', () => { })
