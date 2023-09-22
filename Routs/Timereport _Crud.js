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
    let {id ,Entering}=req.body;
    let Q = ` INSERT INTO \`timereport\` (Name,Entering) VALUES `;
    Q += `((SELECT Name FROM employees WHERE id = ${id}),`;
    Q += `'${Entering}')`;

    db_pool.query(Q, function(err){
        if (err){
            res.status(500).json({message: err}); }
        else{
            res.status(200).json({message: "good"});}  })   });
// ---------------------------------------------------------------------------------------------------------------------
// Read Addpoint
router.get("/List",(req, res) => {
    let Q="SELECT * FROM ` timereport` ";
    db_pool.query(Q, function(err, rows){
        if(err)  {  res.status(500).json({message: err})  }
        else {  res.status(200).json(rows );  }    });    });
// ---------------------------------------------------------------------------------------------------------------------
// Update Entering Addpoint
router.patch("/Clockin",(req, res) => {
    let id=req.body.id;
    let Entering=req.body.Entering;
    let Q =`UPDATE \`timereport\`  SET \`Entering\`='${Entering}' WHERE id=${id} `;
    db_pool.query(Q, function(err){
        if(err){ res.status(500).json({message: err}) }
        else{  res.status(200).json({message: "OK"});  }    });    });
// ---------------------------------------------------------------------------------------------------------------------
// Update Leaving Addpoint
router.patch("/Clockout",(req, res) => {
    let id=req.body.id;
    let Leaving=req.body.Leaving;
    let Q =`UPDATE \`timereport\`  SET \`Leaving\`='${Leaving}' WHERE id=${id} `;
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