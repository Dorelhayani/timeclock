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

// BE Employees Table
const Employees_rtr=require('./Routs/Employee_Crud')
app.use('/employees', Employees_rtr);

// BE TimeReport Table
const Time_rtr=require('./Routs/Timereport _Crud')
app.use('/timereport', Time_rtr);

// Category FE
// const fe_rtr = require('./Routs/FE_R');
// app.use('/FE', fe_rtr);



app.listen(port, () => { console.log(`Now listening on port http://localhost:${port}`); });