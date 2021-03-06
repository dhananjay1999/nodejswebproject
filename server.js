const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

require('dotenv').config({
    path:'./config/index.env'
});
//MongoDB
const connectDB = require('./config/db');
connectDB()

app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'))
app.use(cors())

// routes
app.use('/api/user/', require('./routes/auth.route'));


app.get('/', (req, res)=>{
    res.send('test route => home page');
});
//Page NOt founded
app.use((req,res)=>{
    res.status(404).json({
        msg:"Page Not Founded"
    })
})

const PORT = process.env.PORT
app.listen(5000, () =>{
    console.log(`App listening on port ${PORT}`);
});