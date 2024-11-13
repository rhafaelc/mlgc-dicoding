const { Firestore } = require("@google-cloud/firestore");

async function getData() {
  const db = new Firestore();
  const predictCollection = db.collection("predictions");
  const snapshot = await predictCollection.get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

module.exports = getData;
