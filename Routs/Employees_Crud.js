// Employees CRUD - BackEnd
// ---------------------------------------------------------------------------------------------------------------------
const express = require('express');
const router = express.Router()
module.exports = router;

// ---------------------------------------------------------------------------------------------------------------------
// rout to Main Page - " EMP "
router.get("/",(req, res) => {
    res.render("EMP", {pageTitle:"Employees"}); });
// ---------------------------------------------------------------------------------------------------------------------

// Create Addpoint
router.post("/Add",(req, res) => {
    let name=req.body.name;
    let q=`INSERT INTO \`employees\` (\`name\`) VALUES ('${name}')` ;
    db_pool.query(q, function(err){
        if(err){  res.status(500).json({message: err})  }
        else{  res.status(200).json({message: "OK"});  }    });    });
// ---------------------------------------------------------------------------------------------------------------------

// Read Addpoint
router.get("/List",(req, res) => {
    let q="SELECT * FROM `employees` ";
    db_pool.query(q, function(err, rows){
        if(err)  {  res.status(500).json({message: err})  }
        else {  res.status(200).json(rows );  }    });    });
// ---------------------------------------------------------------------------------------------------------------------

// Update Addpoint
router.patch("/Update",(req, res) => {
    let id=req.body.row_id;
    let {Name,Entering, Leaving }=req.body.name;
    let q=`UPDATE \`employees\`  SET \`name\`='${name}' WHERE id=${id} `;
    db_pool.query(q, function(err){
        if(err){ res.status(500).json({message: err}) }
        else{  res.status(200).json({message: "OK"});  }    });    });
// ---------------------------------------------------------------------------------------------------------------------

// Delete Addpoint
router.delete("/Delete",(req, res) => {
    let id=req.body.id;
    let q=`DELETE FROM \`employees\` WHERE id='${id}' `;
    db_pool.query(q, function(err){
        if(err){  res.status(500).json({message: err})  }
        else {  res.status(200).json({message: "OK"});  }    });    });
// ---------------------------------------------------------------------------------------------------------------------