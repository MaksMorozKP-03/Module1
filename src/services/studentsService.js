import db from '../db/mongo.js';

const collection = db.collection('students');

export const getStudent = async (nickName) => {
    let result = await collection.findOne({ nickName: nickName });
    return result;
}

export const getAllStudents = async () => {
    let cursor = collection.find({});
    const results = await cursor.toArray();
    return results;
}

export const saveStudent = async (data) => {
    let savedResult = await collection.insertOne(data);
    return savedResult;
}

