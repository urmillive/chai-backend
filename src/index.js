import { mongoose } from "mongoose";
import { DB_NAME } from "./contants";
import express from express;
const app = express()



    (async () => {
        try {
            await mongoose.connect(`${ process.env.MONGO_URL }/${ DB_NAME }`);
            app.on("error", () => {
                console.log("Error: ", error);
                throw error;
            })

            app.listen(process.env.PORT)
        } catch (error) {
    console.error("Error: ", error);
    throw error;
}
    }) ()