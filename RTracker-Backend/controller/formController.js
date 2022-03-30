var appFirebase = require("../firebase/firebase");
const db = appFirebase.firestore();
exports.GetFormByDoc = async function (req, res) {
  const fields = db.collection("form-collection").doc("avNXK0iEY9URfqlCLI1s");
  const doc = await fields.get();

  // res.status(400).send({ error: error.details[0].message });
  res.status(200).send(doc);
};
