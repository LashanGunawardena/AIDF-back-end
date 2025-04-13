import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const connectionString = process.env.MONGODB_URI;
        if(!connectionString) {
            throw new Error("Please add the connection String")
        }
        await mongoose.connect(connectionString);
        console.log("DB connected successfully.");
    }
    catch(error){
        console.error("DB connection failed:");
    }
}