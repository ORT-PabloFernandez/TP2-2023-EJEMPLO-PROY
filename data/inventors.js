const { ObjectId } = require("mongodb");
const connection = require("./connection");

async function getInventors() {
  const clientmongo = await connection.getConnection();

  const inventors = await clientmongo
    .db("sample_tp2")
    .collection("inventors")
    .find()
    .toArray();
  return inventors;
}

async function getInventor(id) {
  const clientmongo = await connection.getConnection();

  const inventor = await clientmongo
    .db("sample_tp2")
    .collection("inventors")
    .findOne({ _id: new ObjectId(id) });
  return inventor;
}

async function addInventor(inventor) {
  const clientmongo = await connection.getConnection();

  const result = await clientmongo
    .db("sample_tp2")
    .collection("inventors")
    .insertOne(inventor);
  return result;
}

async function updateInventor(inventor) {
  const clientmongo = await connection.getConnection();
  const query = { _id: new ObjectId(inventor._id) };
  const newvalues = {
    $set: {
      first: inventor.first,
      last: inventor.last,
      year: inventor.year,
    },
  };

  const result = await clientmongo
    .db("sample_tp2")
    .collection("inventors")
    .updateOne(query, newvalues);
  return result;
}

async function deleteInventor(id) {
  const clientmongo = await connection.getConnection();

  const result = await clientmongo
    .db("sample_tp2")
    .collection("inventors")
    .deleteOne({ _id: new ObjectId(id) });

  return result;
}

module.exports = {
  getInventors,
  getInventor,
  addInventor,
  updateInventor,
  deleteInventor,
};
