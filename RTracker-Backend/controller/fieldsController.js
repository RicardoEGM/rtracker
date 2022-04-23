var appFirebase = require("../firebase/firebase");

const db = appFirebase.firestore();

exports.GetFields = async function (_req, res) {
  try {
    const fields = await db.collection("form-collection").get();

    let data = [];

    fields.forEach((doc) => {
      data.push(doc.data());
    });
  } catch (error) {
    res.json({
      success: true,
      response: data,
      message: error,
    });
  }
};

exports.GetFormByDoc = async function (req, res) {
  console.log(req.params.id);
  const fields = await db
    .collection("form-collection")
    .doc(req.params.id)
    .get();

  res.json({
    success: true,
    response: fields.data(),
  });
};
