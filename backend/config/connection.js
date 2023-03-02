

const mongoose = require('mongoose');

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




