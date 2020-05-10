


const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const passport = require('passport');
const secretkey = "myapplicationsecretkey";

module.exports = {
"secret": secretkey,
}
router.get('/api', function(req,res){
  res.json({
    message:'Welcome to the API'
  });
});
  
router.post('/api/register',function(req,res){

  const newUser = new User({

    username:req.body.username,
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
    
  });

  User.saveUser(newUser,function(err,user) {
    if(err) {
      res.json({state:false,msg:"Data not inserted"});
    }
    if(user){
      res.json({state:true,msg:"Data insertered"})   ;
    }
  

});


});   
  
 
router.post('/api/login',function (req,res) {
  
  const email = req.body.email;
  const password = req.body.password;

  User.findByEmail(email,function (err,user){
      if (err) throw err;

      if (!user) {
        res.json({state:false,msg:"No user found"});
      }

      User.passwordCheck(password, user.password,function (err,match){
          if (err) throw err;

          if (match) {
            
            const token = jwt.sign({user}, secretkey,{expiresIn:'86400ms'});  
            res.json(
              {
                  state:true,
                  token:"JWT " +token,
                  user:{
                    id:user._id,
                    name:user.name,
                    username:user.username,
                    email:user.email
                  }
              });
          
          
        }
        

      });

});


});

function verifyToken (req, res, next) {

  const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader != 'undefined' ){

  const bearer = bearerHeader.split(' ')  ;

  const bearerToken = bearer[1];

  req.token = bearerToken;

  next();

  }else {
    res.json({
      message: "Forbidden"
    });
  }
}

router.post('/api/profile',verifyToken,function(req, res) {
  jwt.verify(req.token, secretkey, function(err,authData){
    if(err){
      res.json({
        message: 'forbidden'
      });
    }else{
      res.json({
        message: "Log in successfully",
        authData
      })
        }
    
    });
  });

    

module.exports = router ;