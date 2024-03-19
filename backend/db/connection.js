import { MongoClient, ServerApiVersion } from "mongodb";

const uri=process.env.ATLAS_URI || "";
const client=new MongoClient({
    serverApi:{
      version: ServerApiVersion.v1,  
      strict: true,
      deprecationErrors: true
    },
});

const DATABASE_NAME= 'portfolio_database';

try{
   await client.connect();
   
   await client.db('admin') .command({ping: 1});
   console.log("You've successfully connected to MongoDB")
} catch (error){
console.log(error);
}

let db=client.db(DATABASE_NAME);

export default db;