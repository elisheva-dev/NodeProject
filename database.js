import mongoose from "mongoose";

// const uriLocal = "mongodb://localhost:27017/Hotel";
const uriLocal = process.env.DB_URI;

const connectDB = async () => {
  await mongoose.connect(uri);
};
const database = mongoose.connection;

mongoose.set('toJSON', {
    virtuals: true,
    transform: (doc, converted) => {
      delete converted._id;
    }
  });
  
database.on('error', (error) => {
  console.log(error);
})

database.once('connected', () => {
  console.log('Database Connected');
})

export default connectDB;
