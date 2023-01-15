const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bugfixer',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;

db.on('error',(error)=>{
    console.log(error);
})

db.once('open',()=>{
    console.log('connected to mongodb')
})

// const url     ="mongodb://AnuragMK:mongodbcloud@ac-pe5ogxh-shard-00-00.r59imsk.mongodb.net:27017,ac-pe5ogxh-shard-00-01.r59imsk.mongodb.net:27017,ac-pe5ogxh-shard-00-02.r59imsk.mongodb.net:27017/bugfixer?ssl=true&replicaSet=atlas-nc7e2a-shard-0&authSource=admin&retryWrites=true&w=majority"

// module.exports.connect = ()=>{

//     mongoose.connect(url).then((res)=>console.log("Mongodb connected successfully")).
//     catch((err)=> console.log("Error:",err))
// }
