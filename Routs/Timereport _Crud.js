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
    Q += `((SELECT Name FROM employees WHERE id = ${id}),`;
    Q += `'${Clockin}')`;

    db_pool.query(Q, function(err){
        if (err){
            res.status(500).json({message: err}); }
        else{
            res.status(200).json({message: "good"});}  })   });
// ---------------------------------------------------------------------------------------------------------------------
// Read Addpoint
router.get("/List",(req, res) => {
    let Q="SELECT * FROM `timereport` ";
    db_pool.query(Q, function(err, rows){
        if(err)  {  res.status(500).json({message: err})  }
        else {  res.status(200).json(rows );  }    });    });
// ---------------------------------------------------------------------------------------------------------------------
// Update Clockin Addpoint
router.patch("/Clockin",(req, res) => {
    let id=req.body.id;
    let Clockin=req.body.Clockin;
    let Q =`UPDATE \`timereport\`  SET \`Clockin\`='${Clockin}' WHERE id=${id} `;
    db_pool.query(Q, function(err){
        if(err){ res.status(500).json({message: err}) }
        else{  res.status(200).json({message: "OK"});  }    });    });
// ---------------------------------------------------------------------------------------------------------------------
// Update Clockout Addpoint
router.patch("/Clockout",(req, res) => {
    let id=req.body.id;
    let Clockout=req.body.Clockout;
    let Q =`UPDATE \`timereport\`  SET \`Clockout\`='${Clockout}' WHERE id=${id} `;
    db_pool.query(Q, function(err){
        if(err){ res.status(500).json({message: err}) }
        else{  res.status(200).json({message: "OK"});  }    });    });
// ---------------------------------------------------------------------------------------------------------------------
// Delete Addpoint
router.delete("/Delete",(req, res) => {
    let id=req.body.id;
    let q=`DELETE FROM \`timereport\` WHERE id='${id}' `;
    db_pool.query(q, function(err){
        if(err){  res.status(500).json({message: err})  }
        else {  res.status(200).json({message: "OK"});  }    });    });
// ---------------------------------------------------------------------------------------------------------------------