const express =require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080
const path = require('path');
const db = require('./config/connection');
require('dotenv').config();
// const adminRouter = require('./routers/adminRouter')
const userRouter = require('./routers/userRouter')

//db connection
db(()=>{
    try {
        console.log('Database successfully connected')
    } catch (error) {
        console.log('Database not connected',error)
        
    }
})


//middleware
app.use(express.json());
app.use(cors())
app.use(bodyParser.json({limit : "50mb"}))
app.use(bodyParser.urlencoded({extended:true , limit:"50mb"}))




//header

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', "*")
    res.header("Access-Control-Allow-Header","*")
    next()
})

//api



//static resources
app.use('upload',express.static(path.join(__dirname,'/../uploads')))
app.use(express.static(path.join(__dirname,'/../frontend/build')))

app.get('*',(req,res)=>{
    try{
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`))

    }catch(e){
        res.send('oop! error occured')
    }

})



app.use('/user',userRouter);
// app.use('/admin',adminRouter);
//server listen
app.listen(PORT,()=>{
    console.log(`bugfixer is running on PORT no - ${PORT}`)
})