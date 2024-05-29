
const Usermodel = require('../Models/Usermodel')
const userModel = require('../Models/Usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async (req,res)=>{

    try {
        const {username, email, password, role} = req.body;
        if(!username || !email || !password){
            return res.status(401).send({
                success:false,
                msg:'all fields require !'
            })
        }
        const existingUser = await Usermodel.findOne({email:email});
        if(existingUser){
            return res.status(401).send({
                success:false,
                msg:'user already exists !'
            })
        }
const salt = await bcrypt.genSalt(10);
const hashpassword = await bcrypt.hash(password, salt);

        const user = new Usermodel({username, email, role, password:hashpassword});
        const newUser = await user.save();

        const token = jwt.sign({id:user._id}, process.env.SECRET_KEY, {expiresIn:'1d'}, (error, token)=>{
            if(error){
                return res.status(401).send({
                    success:false,
                    msg:'error while generating token !',
                    error
                })
            }else{
                return res.status(201).send({
                    success:true,
                    msg:'Registered Success !',
                    newUser,
                    Token:token
                });
            }
        })
  

       
    } catch (error) {
       return res.status(404).send({
            success:false,
            msg:'something went wrong !',
            error:error.message,
            
        })
    }
};


const loginUser = async (req,res)=>{
    try {
        const {email , password} = req.body;
        if(!email || !password){
            return res.status(401).send({
                success:false,
                msg:'all fields require !'
            })
        }

        const user = await userModel.findOne({email:email});
        if(!user){
            return res.status(401).send({
                success:false,
                msg:'not valid email !'
            })
        }

        const validPassword = await bcrypt.compare(password , user.password);
        if(!validPassword){
            return res.status(401).send({
                success:false,
                msg:'please provide valid password !'
            })
        }

        const token = jwt.sign({id:user._id}, process.env.SECRET_KEY, {expiresIn:'1d'}, (error, token)=>{
            if(error){
                return res.status(401).send({
                    success:false,
                    msg:'error while generating token !',
                    error
                })
            }else{
                return res.status(201).send({
                    success:true,
                    msg:'login successfully !',
                    user,
                    Token:token
                })
            }
        })

       

    } catch (error) {
        return res.status(404).send({
            success:false,
            msg:'something went wrong !',
            error:error.message
        })
    }
}


module.exports = {createUser, loginUser};