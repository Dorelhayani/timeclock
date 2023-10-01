const express = require('express');
const router = express.Router()
module.exports = router;
// ---------------------------------------------------------------------------------------------------------------------
// rout to Main Page - " EMP "
router.get("/",(req, res) => {
    res.render("MainEmployees", {pageTitle:"Time Report"});});
// ---------------------------------------------------------------------------------------------------------------------