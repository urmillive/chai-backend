import { mongoose } from "mongoose";
import { DB_NAME } from "../contants.js";
import express from "express";

const app = express()

const connectDB = (async () => {
    try {
        const connectionInstance = await mongoose.connect(`${ process.env.MONGO_URL }/${ DB_NAME }`);
        console.log(`MongoDB Connected !! HOST : ${ connectionInstance.connection.host }`);
        app.on("error", () => {
            console.log("Error if not connected: ", error);
            throw error;
        })

    } catch (error) {
        console.error("Error connecting to MongoDB: ", error.message);
        process.exit(1)
    }
})

export default connectDB