// צד אחורי

const express = require('express');
const port = 2233;
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.set("view engine", "ejs");

const path = require('path');
app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "js")));

let db_M = require('./database');
global.db_pool = db_M.pool;

// BE Categories Table
const cat_rtr=require('./routes/Cat_R')
app.use('/Categories', cat_rtr);

// BE Task Table
const task_rtr=require('./routes/Task_R')
app.use('/Task', task_rtr);

// Category FE
const fe_rtr = require('./routes/FE_R');
app.use('/FE', fe_rtr);



app.listen(port, () => { console.log(`Now listening on port http://localhost:${port}`); });