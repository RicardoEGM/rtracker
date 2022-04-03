var appFirebase = require("../firebase/firebase");

const db = appFirebase.firestore();

exports.GetFormByDoc = async function (req, res) {
  const fields = db.collection("field-collection").doc(req.params.id);
  const doc = await fields.get();

  res.json({
    success: true,
    response: doc.data(),
  });
};
