import { Router } from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = Router();
const SKILLS_COLLECTION = db.collection("skills");

//endpoint fro getting list of skills
router.get("/", async (req, res) => {
  let collection = db.collection("skills");
  let result = await collection.find({}).toArray();
  res.send(result).status(200);
});

//Endpoint for adding a single skill by id
router.get("/:id", async (req, res) => {
  let collection = db.collection("skills");
  let query = req.params.id;
  let results = await ListCollectionsCursor.findOne(query);
  !results ? res.send("Not found").status(404) : res.send(results).status(200);
});

//Endpoint for adding a single skill
router.post("/", async (re, res) => {
  try {
    letnewSkill = {
      skill: req.body.skill,
      proficiency: req.body.proficiency,
    };
    let result = await SKILLS_COLLECTION.insertOne(newSkill);
    res.send(result).status(201);
  } catch (error) {
    console.error(error);
  }
});

//Endpoint for updating a skills by the id
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const update = {
      $set: {
        skills: req.body.proficiency,
      },
    };
    let result = await SKILLS_COLLECTION.update(query, update);
    res.send(result).status(200);
  } catch (error) {
    console.error(error);
  }
});

//Endpoint  for deleting  a skill with its id
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    let result = await EXPERIENCE_COLLECTION.deleteOne(query);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
  }
});

export default router;
