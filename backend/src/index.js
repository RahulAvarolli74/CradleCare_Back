import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// Load environment variables
dotenv.config({
    path: './.env'
});

// 1. Connect to Database
connectDB()
.then(() => {
    // 2. Start Server ONLY after DB connects
    app.listen(process.env.PORT || 8000, () => {
        console.log(`  Server is running at port : ${process.env.PORT || 8000}`);
    });
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
});