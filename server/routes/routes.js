const express = require('express');
const router = express.Router();

const collections = ['financial'];
const connectionString = 'mongodb://hkindia:indian12@ds115971.mlab.com:15971/hkmongodb';
const mongojs = require('mongojs');
const db = mongojs(connectionString, collections);

db.on('error', (err)=>{
    console.log('database error: ', err);
});

db.on('connect',()=>{
    console.log('database connected');
});

//connecting to axios to connect with http service calls
const axios = require('axios');
const postApi = 'https://jsonplaceholder.typicode.com';

router.get('/',(req,res)=>{
    res.send('it works');
})

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

router.get('/financialData',function(req,res,next){
        
});

module.exports = router;

