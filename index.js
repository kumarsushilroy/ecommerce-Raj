
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const connect = require('./Connection');

const userRoute = require('./Routes/UserRoute');
const { loginUser } = require('./Controllers/Userctrl');

const PORT = process.env.PORT 
app.use(express.json());
app.use(cors());

app.use(userRoute);
app.use(loginUser);

app.get('/get', (req,res)=>{
    res.send({message:"true"})
})


app.listen(PORT , ()=>{
    console.log(`server is listening to the port ${PORT}`) 
    connect();
})