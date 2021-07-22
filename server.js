const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const exp = require('constants');
const app = express();
require('dotenv').config({
    path:'./config/index.env'
});

app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'))
app.use(cors())

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