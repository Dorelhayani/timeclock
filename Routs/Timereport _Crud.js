const express = require('express');
const router = express.Router()
module.exports = router;

// Create Addpoint
router.post("/AddTime",(req, res) => {
    let {id ,Entering}=req.body;
    let Q = ` INSERT INTO \`timereport\` (Name,Entering) VALUES `;
    Q += `((SELECT Name FROM employees WHERE id = ${id}),`;
    Q += `'${Entering}')`;

    db_pool.query(Q, function(err){
        if (err){
            res.status(500).json({message: err}); }
        else{
            res.status(200).json({message: "good"});}
    })
});

// Read Addpoint
router.get("/List",(req, res) => {
    let Q="SELECT * FROM ` timereport` ";
    db_pool.query(Q, function(err, rows){
        if(err)  {  res.status(500).json({message: err})  }
        else {  res.status(200).json(rows );  }    });    });

// Update Addpoint
router.patch("/UpdateTime",(req, res) => {
    // let id=req.body.id;
    // let Leaving=req.body.Leaving;

    let {id, Entering, Leaving} = req.body;

    // let s =`UPDATE \`timereport\`  SET \`Leaving\`='${Leaving}' WHERE id=${id} `;
    let Q =`UPDATE \`timereport\`  SET \`Leaving\`='${Leaving}' WHERE id=${id} `;

    db_pool.query(Q, function(err){
        if(err){ res.status(500).json({message: err}) }
        else{  res.status(200).json({message: "OK"});  }    });    });

// Delete Addpoint
router.delete("/Delete/:row_id",(req, res) => {
    let id=req.params.row_id;
    let q=`DELETE FROM \`timereport\` WHERE id='${id}' `;

    db_pool.query(q, function(err, rows ){

        if(err){  res.status(500).json({message: err})  }

        else {  res.status(200).json({message: "OK"});  }    });    });
