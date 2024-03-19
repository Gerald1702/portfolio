import { Router } from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = Router();
const AchievementsCollection = db.collection("achievements");

//Endpoint for getting list of achievements
router.get("/", async (req, res) => {
  try {
    let results = await AchievementsCollection.find({}).toArray();
    res.send(results).status(200);
  } catch (error) {
    console.error(error);
    res.send("Error getting list of achievements!").status(500);
  }
});

//Endpoint for getting a single achievements
router.get("/", async (req, res) => {
  try {
    let query = { _id: new ObjectId(req.params.id) };
    let result = await AchievementsCollection.findOne(query);

    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.send("Achievement not found!").status(500);
  }
});

//Endpoint for adding a single achievment
router.get("/", async (req, res) => {
  try {
    let newAchievement = {
      achievements: req.body.achievements,
      description: req.body.description,
      image: req.body.image,
    };
    let result = await AchievementsCollection.insertOne(newAchievement);
    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.send("Error creating new achievement!").status(500);
  }
});

//Endpoint for  updating  achievement by Id
router.patch("/", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const update = {
      $set: {
        achievements: req.body.achievements,
        description: req.body.description,
        image: req.body.image,
      },
    };
    let result = await AchievementsCollection.updateOne(query, update);
    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.send("Error updating achievement!").status(500);
  }
});

//Endpoint for deleting  an achievement by its id
router.delete("/:id", async (req, res) => {
try{
  const query = {_id: new ObjectId(req.params.id)};
  let result= await AchievementsCollection.deleteOne(query);
  res.send(result).status(200);
} catch (error) {
console.error(error);
res.send("Error deleting achievement ").status(500);
}
});


export default router;
