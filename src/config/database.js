import mongoose from "mongoose";
import config from "./config.js";

async function connectDB() {
    
    await mongoose.connect("mongodb+srv://tanujprajapati9876_db_user:FdCPFjoki9h5zQqc@auth25.m3zzkco.mongodb.net/tanu")

    console.log("CONNECTED TO DB");
    
}

export default connectDB;