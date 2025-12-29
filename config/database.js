import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    // if database is connected, don't connect again
    if (connected) {
        console.log('Mongodb is already connected')
        return;
    }

    // Connect to Mongo DB
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        connected = true;
    } catch (error) {
        console.log(error);
    }
}
 
export default connectDB;