var express = require("express")
var router = express.Router();
router.get('/',(req,res) => {    
    res.json({statusCode: 200, message: 'Success', data: {'name': 'Kartik'}})
})
module.exports = router; 