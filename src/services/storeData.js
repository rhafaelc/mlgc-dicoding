const { Firestore } = require("@google-cloud/firestore");

async function storeData(id, data) {
  console.log("id", id);
  console.log("data", data);

  const db = new Firestore();
  console.log(db);
  const predictCollection = db.collection("predictions");
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
