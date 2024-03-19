import { Router } from "express";
import db from "../db/connection.js"
import { ObjectId } from "mongodb";

const router=Router();
const PROJECT_COLLECTION=db.collection("projects");

//endpoint for getting list of projects
router.get("/",async (req, res) =>{
    try{
        let results = await PROJECT_COLLECTION.find({}).toArray(); 
        res.send(results).status(200);
        }catch(error) {
            console.error(error);
            res.send("Error: Could not get project data").status(500);
    }
});

//Endpoint for adding a single skill by id
router.get("/", async (req,res) =>{
    try{
let query = {_id: new ObjectId(req.params.id)};
let result = await PROJECT_COLLECTION.findOne(query);

res.send(result).status(200);
    } catch (error) {
        console.error(error);
        res.send("Not found!").status(404); 
    }
});
   
 
  