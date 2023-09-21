const express = require('express');
const router = express.Router()
module.exports = router;

// Create Addpoint
router.post("/AddTime",(req, res) => {
    let {id ,Entering}=req.body;
    let s = ` INSERT INTO \`timereport\` (Name,Entering) VALUES `;
    s += `((SELECT Name FROM employees WHERE id = ${id}),`;
    s += `'${Entering}')`;

    db_pool.query(s, function(err){
        if (err){
            res.status(500).json({message: err}); }
        else{
            res.status(200).json({message: "good"});}
    })
});

// Read Addpoint
router.get("/List",(req, res) => {
    let q="SELECT * FROM ` timereport` ";
    db_pool.query(q, function(err, rows){
        if(err)  {  res.status(500).json({message: err})  }
        else {  res.status(200).json(rows );  }    });    });





// Update Addpoint
router.patch("/UpdateTime",(req, res) => {
    let id=req.body.id;
    let Leaving=req.body.Leaving;

    let s =`UPDATE \`timereport\`  SET \`Leaving\`='${Leaving}' WHERE id=${id} `;

    db_pool.query(s, function(err){
        if(err){ res.status(500).json({message: err}) }
        else{  res.status(200).json({message: "OK"});  }    });    });

// // Delete Addpoint
// router.delete("/Delete/:row_id",(req, res) => {
//     let id=req.params.id;
//
//     let q=`DELETE FROM \`timereport\` WHERE id='${id}' `;
//
//     db_pool.query(q, function(err, rows ){
//
//         if(err){  res.status(500).json({message: err})  }
//
//         else {  res.status(200).json({message: "OK"});  }    });    });
//