
const jwt = require('jsonwebtoken');
const Usermodel = require('./Models/Usermodel');

 const authAccess = (req, res, next)=>{
    const token = req.headers['authorization'].split(' ')[1];
    if(token){
        jwt.verify(token , process.env.SECRET_KEY, (error, decode)=>{
            if(error){
                return res.status(401).send({
                    success:false,
                    msg:'error while verifying token' ,
                    error
                })
            }
            else{
                req.body.userId = decode ;
                next();
            }
        })
    } else{
        return res.status(401).send({
            success:false,
            msg:'please provide token !'
        })
    }

}


// Admin Access
const adminAccess = async (req,res,next)=>{
//   if(req.user.role !== 'admin')
//     return res.status(401).send({
//         success:false,
//         msg:'not admin !'
//     })
//     else{
//         next();
//     }

const user = await Usermodel.findOne(req.user._id);
if(user.role !== 'admin')
 return res.status(401).send({
  success:false,
  msg:'not admin !'

})
}


module.exports = {authAccess, adminAccess}