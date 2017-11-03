const express = require('express');
const {json} = require('body-parser');
const router = require('./router');
const config = require('./config');

const app = express();

app.use(json());
app.use(router);
app.use((err,req,res,next)=>{
    // последний обработчик ошибок
})