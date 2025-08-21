import { app } from "../app.js";
import { connectDb } from "./db/db_connetion.js";
import dotenv from "dotenv";
dotenv.config();


connectDb().then(()=>{
    app.listen(process.env.PORT || 3003,()=>{
        
        console.log(`Server is running on port: ${process.env.PORT || 3003}`)
    })
})
.catch((error)=>{
    console.log(`Server is not responding...`)
    process.exit(1)
})
