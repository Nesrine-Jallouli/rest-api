const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + `../config/.env` })
const connectDB = () => {
    mongoose.connect(process.env.mongoURI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
         useCreateIndex: true, })
        .then(() => console.log('DB is connected'))
        .catch((Error) => console.log(Error))
}
module.exports = connectDB;