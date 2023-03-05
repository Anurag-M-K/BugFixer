const express =require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 80
const path = require('path');
const db = require('./config/connection');
require('dotenv').config();
const adminRouter = require('./routers/adminRouter');
const userRouter = require('./routers/userRouter');
const conversationRouter = require('./routers/conversation');
const messageRouter = require('./routers/messages');
const communityRouter = require('./routers/communityRoutes')

//db connection
db(()=>{
    try {
        console.log('Database successfully connected')
    } catch (error) {
        console.log('Database not connected',error)
        
    }
})

//middleware
app.use(cors())
app.use(bodyParser.json({limit : "50mb"}))
app.use(bodyParser.urlencoded({extended:true , limit:"50mb"}))

//header
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', "*")
    res.header("Access-Control-Allow-Header","*")
    next()
})

app.use('upload',express.static(path.join(__dirname,'/../uploads')))
app.use(express.json({limit: '50mb'}));

 
//api's
app.use('/api',userRouter);
app.use('/admin',adminRouter);
app.use('/api/conversation',conversationRouter);
app.use('/api/message',messageRouter);
app.use("/api/community",communityRouter)

//server listen
app.listen(process.env.PORT,()=>{
    console.log(`bugfixer is running on PORT no - ${PORT}`)
})