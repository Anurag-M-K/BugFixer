

const mongoose = require('mongoose');
// const databaseUrl = process.env.DATABASE_URL;
// console.log("databaseurl ",databaseUrl)
const db = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };

    await mongoose.connect(process.env.DATABASE_URL, connectionParams);
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Error connecting to database:', error);
  }
};

module.exports = db;

// const mongoose = require('mongoose');
// const databaseUrl = process.env.DATABASE_URL;


// const url = "mongodb+srv://AnuragM-K:s69BCSIsT8g0fwvn@cluster0.li6oaod.mongodb.net/Bugfixer?retryWrites=true&w=majority";

// const db = async()=>{
//     try {
//         const connectinoParams = {
//             useNewUrlParser:true,
//             useUnifiedTopology:true
//         }
        
//         mongoose.connect(databaseUrl,connectinoParams).then(()=>{
//             console.log('Database connected successfully')
//         })
//     } catch (error) {
//         console.log("`-`-`",error)
//     }
// }

// module.exports = db;



// const db = async()=>{
//     try {
//         const connection = await mongoose.connect('mongodb://0.0.0.0:27017/bugfixer',{
//             useNewUrlParser :true,
//             useUnifiedTopology:true
//         })
//         console.log(`Mongodb connected successfully :${connection.connection.host}`)

//     } catch (error) {
//         console.log('====>', error)
        
//     }
// }


