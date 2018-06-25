const express = require('express');
const app = express();

const path = require('path');

//mongo db
//const mongojs = require('mongojs');
//const db = mongojs('mongodb://hk_india:indian12@ds115971.mlab.com:15971/hkmongodb',['FinancialData']);

//Getting our post routes
const routes = require('./server/routes/routes');

//express to join the server path with output path
//using middleware
app.use(express.static(path.join(__dirname,'dist')));
app.use('/routes',routes);

//catch all other routes and return it to the index
app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname,'dist/index.html'));
})

//use produdction or dev
const port = process.env.PORT || 4600;
app.listen(port, (req, res)=>{
    console.log(`Running on port ${port}`);
});