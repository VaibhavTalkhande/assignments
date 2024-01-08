const express = require('express');
// const userRoute = require('./routes/user');
const cardRoute = require('./routes/card');
require('dotenv').config();
const PORT = 4000;
const app = express();
const cors = require('cors');

app.use(cors(
  {
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:false
  }
));
app.use(express.json())
// app.use('/api/user',userRoute);
app.use('/api/card',cardRoute);

app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`); 
})