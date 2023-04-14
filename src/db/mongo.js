import { MongoClient } from "mongodb";
import { config } from "../configs/config.js";


const client = new MongoClient(config.mongo.url);

let connection = await client.connect();

const db = connection.db('local');

export default db;