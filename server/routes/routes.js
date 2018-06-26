const express = require('express');
const router = express.Router();

const collections = ['financial'];
//const connectionString = 'mongodb://hkindia:indian12@ds115971.mlab.com:15971/hkmongodb';
const connectionString = 'mongodb://hkindia:indian12@localhost:27017/mycustomers';
const mongojs = require('mongojs');
const db = mongojs(connectionString, collections);
db.on('error', (err)=>{
    console.log('database error: ', err);
});

db.on('connect',()=>{
    console.log('database connected');
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://hkindia:indian12@localhost:27017/mycustomers');

//connecting to axios to connect with http service calls
const axios = require('axios');
const postApi = 'https://jsonplaceholder.typicode.com';

router.get('/',(req,res)=>{
    res.send('it works');
});

//GET Post
router.get('/posts',(req,res)=>{
    //res.send('POST WORKS');
    axios.get(`${postApi}/posts`).then(posts => {
        //console.log(posts.data);
        res.status(200).json(posts.data);
    })
    .catch((error)=>{
        //console.log(error);
        res.status(500).send(error);
    })
});

//include financial models
const Financial = require('./../models/financials.model');

router.get('/financialData',function(req,res,next){
    mongoose.model('financials').find({},(err,financials)=>{
        console.log(financials);
        res.status(200).json(financials);
        //res.send(financials);
        if(err) {console.log(err);};
    });
    
});

router.get('/financialData/:year',function(req,res,next){
    mongoose.model('financials').find({'name' : req.params.year},(err,financials)=>{
        console.log(financials);
        res.status(200).json(financials);
        //res.send(financials);
        if(err) {console.log(err);};
    });
});

//include financial models
const Users = require('./../models/users.model');

router.get('/usersData',function(req,res,next){
    mongoose.model('users').find({}, (err, users)=>{
        console.log(users);
        res.status(200).json(users);
    });
});

module.exports = router;

