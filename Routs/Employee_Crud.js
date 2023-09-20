const express = require('express');
const router = express.Router()
module.exports = router;

// Create Addpoint
router.post("/AddEmployee",(req, res) => {
    let name=req.body.name;
    let q=`INSERT INTO \`employees\` (\`name\`) VALUES ('${name}')` ;
    db_pool.query(q, function(err, rows){
        if(err){  res.status(500).json({message: err})  }
        else{  res.status(200).json({message: "OK"});  }    });    });

// Read Addpoint
router.get("/List",(req, res) => {
    let q="SELECT * FROM `employees` ";
    db_pool.query(q, function(err, rows){
        if(err)  {  res.status(500).json({message: err})  }
        else {  res.status(200).json(rows );  }    });    });

// Update Addpoint
router.patch("/Update/:row_id",(req, res) => {
    let id=req.params.id;

    let q=`UPDATE \`employees\`  SET \`name\`='${name}' WHERE id=${id} `;

    db_pool.query(q, function(err, rows){
        if(err){ res.status(500).json({message: err}) }
        else{  res.status(200).json({message: "OK"});  }    });    });

// Delete Addpoint
router.delete("/Delete/:row_id",(req, res) => {
    let id=req.params.id;

    let q=`DELETE FROM \`employees\` WHERE id='${id}' `;

    db_pool.query(q, function(err, rows ){

        if(err){  res.status(500).json({message: err})  }

        else {  res.status(200).json({message: "OK"});  }    });    });