var appFirebase = require("../firebase/firebase");

const db = appFirebase.firestore();

exports.AddTracker = async function (req, res) {
  // const tracker = await db.collection("tracker").add(req.body);

  let data = {
    ...req.body,
    _id: tracker.id,
  };

  res.json({
    success: true,
    response: data,
  });
};
