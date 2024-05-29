
const mongoose = require('mongoose');

const connect = ()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('connecton successfull')
    }).catch((error)=>{
       console.log(error)
    })
};

module.exports = connect;