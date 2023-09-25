const express = require('express');
const router = express.Router()
module.exports = router;
// ---------------------------------------------------------------------------------------------------------------------
// rout to Main Page - " EMP "
router.get("/",(req, res) => {
    res.render("TRMP", {pageTitle:"Time Report"});});
// ---------------------------------------------------------------------------------------------------------------------
// Create Addpoint
router.post("/Add",(req, res) => {
    let {id ,Clockin}=req.body;
    let Q = ` INSERT INTO \`timereport\` (Name,Clockin) VALUES `;
    Q += `((SELECT Name FROM employees WHERE employeeID = ${id}),`;
    Q += `'${Clockin}')`;

    db_pool.query(Q, function(err){
        if (err){
            res.status(500).json({message: err}); }
        else{
            res.status(200).json({message: "good"});}  })   });
// ---------------------------------------------------------------------------------------------------------------------
// Read Addpoint
router.get("/List",(req, res) => {
    // let Q="SELECT * FROM `timereport` ";
    let Q=
    `
        SELECT e.employeeID, e.Name, t.Clockin, t.Clockout
        FROM employees e
        LEFT JOIN \`timereport\` t ON e.employeeID = t.employeeID
    `
    db_pool.query(Q, function(err, rows){
        if(err)  {  res.status(500).json({message: err})  }
        else {  res.status(200).json(rows );  }    });    });
// ---------------------------------------------------------------------------------------------------------------------
// Update Clockin Addpoint
router.patch("/Clockin",(req, res) => {
    let id=req.body.id;
    let clkin=req.body.Clockin;
    let Q = `UPDATE \`timereport\` SET \`Clockin\` = '${clkin}' WHERE \`employeeID\` = ${id}`;

    db_pool.query(Q, function(err){
        if(err){ res.status(500).json({message: err}) }
        else{  res.status(200).json({message: "OK"});  }    });    });
// ---------------------------------------------------------------------------------------------------------------------
// Update Clockout Addpoint
router.patch("/Clockout",(req, res) => {
    let id=req.body.id ;
    let clkout=req.body.Clockout;
    let Q =`UPDATE \`timereport\`  SET \`Clockout\`='${clkout}' WHERE \`employeeID\`=${id} `;
    db_pool.query(Q, function(err){
        if(err){ res.status(500).json({message: err}) }
        else{  res.status(200).json({message: "OK"});  }    });    });
// ---------------------------------------------------------------------------------------------------------------------
// Delete Addpoint
// router.delete("/Delete",(req, res) => {
//     let id=req.body.employeeID ;
//     let q=`DELETE FROM \`timereport\` WHERE id='${id}' `;
//     db_pool.query(q, function(err){
//         if(err){  res.status(500).json({message: err})  }
//         else {  res.status(200).json({message: "OK"});  }    });    });
// ---------------------------------------------------------------------------------------------------------------------