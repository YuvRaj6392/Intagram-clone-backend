const db=require('../models/index');
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken');
const secret="benzema123";
const User=db.users;

//controller for signup
exports.signup = async (req, res) => {
    try {

      const { name, email, password } = req.body;
      // Validate input data
      // ...
      if (!name || !email || !password)
      {
        return res.status(400).json({
            success: false,
            error: "Fill all the fields!",
          });
      }
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          success: false,
          error: "User already exists!",
        });
      }
  
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      const newUser = await User.create({
        name,
        email,
        password: hash,
        isLoggedIn: false,
      });
      
      return res.status(200).json({
        success: true,
        user: newUser,
      });
    } catch (err) {
      // Handle specific errors
      // ...
  
      return res.status(500).json({
        success: false,
        error: "Internal server error!",
      });
    }
  };


  //controller for singin
  exports.signin=async (req,res)=>
  {
    try
    {
      const {email,password}=req.body;
      if(!email || !password)
      {
        return res.status(400).json({
          success:false,
          message:'Fill all the fields!'
        })
      }
      const user= await User.findOne({email:email});
      if(user===null)
      {
        return res.status(400).json({
          success:false,
          message:'Please use correct credentials!'
        })
      }
      const comparePassword=await  bcrypt.compareSync(password,user.password);
      if(!comparePassword)
      {
        return res.status(400).json({
          success:false,
          message:'Please use correct credentials!'
        })
      }
      const update={isLoggedIn:true};
      await User.findOneAndUpdate({email:email},update,{
        userFindAndModify:true
      })
      const data=user.id;
      const jwtToken=jwt.sign(data,secret);
      res.status(200).json({
        success:true,
        message:jwtToken
      })

    }catch(ex){
      res.status(500).json({
        success:false,
        message:"Internal server error!"
      })
    }
  }
  