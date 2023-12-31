const express = require('express');
const router = express.Router()
module.exports = router;
// ---------------------------------------------------------------------------------------------------------------------
// rout to Main Page - " TRMP = timereprt"
router.get("/",(req, res) => {
    res.render("TRMP", {pageTitle:"Time Report"});});
// ---------------------------------------------------------------------------------------------------------------------
// rout to Main Employees Page
router.get("/MainEmployees",(req, res) => {
    res.render("MainEmployees", {pageTitle:"Main Employees Page"});});
// ---------------------------------------------------------------------------------------------------------------------
// Create Addpoint
router.post("/Add",(req, res) => {
    let id = req.body.employeeID;
    let Q = `INSERT INTO timereport(employeeID,Clockin,Date) VALUES(${id},CURRENT_TIMESTAMP(), DATE_FORMAT(CURRENT_DATE(),'%Y-%m-%d' ))`;
    db_pool.query(Q, function(err){
        if (err){
            res.status(500).json({message: err}); }
        else{
            res.status(200).json({message: "good"});}  })   });
// ---------------------------------------------------------------------------------------------------------------------
// Read Addpoint
router.get("/List",(req, res) => {
    let Q=
    `
        SELECT e.employeeID, e.Name, t.Clockin, t.Clockout, t.Date
        FROM employees e
        LEFT JOIN \`timereport\` t ON e.employeeID = t.employeeID
        WHERE t.Clockin IS NOT NULL AND t.Clockout IS NOT NULL AND t.Date IS NOT NULL
    `
    db_pool.query(Q, function(err, rows){
        if(err)  {  res.status(500).json({message: err})  }
        else {  res.status(200).json(rows );  }    });    });
// ---------------------------------------------------------------------------------------------------------------------
// Update Clockin Addpoint
router.patch("/Clockin",(req, res) => {
    let id=req.body.employeeID;
    let Q = `UPDATE timereport SET Clockin = CURRENT_TIMESTAMP() WHERE employeeID = ${id}`;
    db_pool.query(Q, function(err){
        if(err){ res.status(500).json({message: err}) }
        else{  res.status(200).json({message: "OK"});  }    });    });
// ---------------------------------------------------------------------------------------------------------------------
// Update Clockout Addpoint
router.patch("/Clockout",(req, res) => {
    let id=req.body.employeeID ;
    let Q =`UPDATE timereport SET Clockout= CURRENT_TIMESTAMP() WHERE employeeID=${id} `;
    db_pool.query(Q, function(err){
        if(err){ res.status(500).json({message: err}) }
        else{  res.status(200).json({message: "OK"});  }    });    });
// ---------------------------------------------------------------------------------------------------------------------
// Delete Addpoint
router.delete("/Delete",(req, res) => {
    let id=req.body.employeeID ;
    let q=`DELETE FROM \`timereport\` WHERE employeeID='${id}'`;
    db_pool.query(q, function(err){
        if(err){  res.status(500).json({message: err})  }
        else {  res.status(200).json({message: "OK"});  }    });    });
// ---------------------------------------------------------------------------------------------------------------------