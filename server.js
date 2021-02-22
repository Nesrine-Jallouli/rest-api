const express = require('express');
require('dotenv').config({path: __dirname +`/config/.env`})
const connectDB =require('./database/connectDB')
const app = express();
//4- parse data
app.use(express.json());
//3- routes
app.use('/api/user', require('./routes/routes'));
//2- connect DB
connectDB();
//1- run server
app.listen(process.env.PORT, (err) => {
    err? console.log('problem server') : console.log('The server is connetected' )
})