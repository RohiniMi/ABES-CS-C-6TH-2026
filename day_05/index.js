import express from "express";
import { readJsonFile } from "./readAndWriteServices.js";
const app = express();
app.use(express.json());
const port = 8800;

app.get("/students",async(req,res)=>{
     try {
        const data = await readJsonFile("./students.json")
        res.send(data);
     } catch (error) {
        
     }
})

app.listen(port,()=>console.log("app is running on the port 8800"))
