
const express = require('express');
const { createUser, loginUser } = require('../Controllers/Userctrl');
const { authAccess, adminAccess } = require('../Middleware');

// const Middleware = require('../Middleware');

const router = express.Router();

// Register route 
router.post('/create/user', createUser);

// Login Rout
router.post('/login/user', authAccess,  loginUser);

router.get('/get/product', adminAccess, (req,res)=>{
    res.send({message:'middleware called'})
})

//Protected Route
router.get('/user-auth', authAccess, (req,res)=>{
    res.status(201).send({ok:'true'})
} )


module.exports = router;