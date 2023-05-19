require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const uri = process.env.CNMONGODB;

const client = new MongoClient(uri);

let instance = null;
async function getConnection() {
  if (instance == null) {
    try {
      instance = await client.connect();
    } catch (error) {
      console.log(err.message);
    }
  }

  return instance;
}

module.exports = { getConnection };
