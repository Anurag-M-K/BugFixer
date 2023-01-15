const express = require('express')
const router = express.Router();
const { adminLogin } = require('../controller/adminLoginController')


router.post('/adminLogin',(req,res)=>{
    res.json('hey its woriking')
})

module.exports = router;