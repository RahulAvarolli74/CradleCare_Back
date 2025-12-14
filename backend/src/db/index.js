import mongoose from "mongoose";

// Use your actual database name here
const DB_NAME = "cradlecare"; 

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB Connected! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(" MONGODB connection FAILED: ", error);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;