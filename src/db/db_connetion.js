import mongoose from "mongoose";

const connectDb = async()=>{
    try{
       const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
       console.log("Database Connection Successfull..")
    }
    catch(error){
        console.log(process.env.DB_URL)
        console.error("Error occured during database connection..", error)
        
        process.exit(1);
    }
}
export {connectDb}