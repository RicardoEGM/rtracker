var appFirebase = require("../firebase/firebase");

const db = appFirebase.firestore();

exports.AddTracker = async function (req, res) {
  // const tracker = await db.collection("tracker").add(req.body);

  let data = {
    ...req.body,
    // _id: tracker.id,
    _id: "awdasdasdasdasdasdsadasd",
  };

  res.json({
    success: true,
    response: data,
  });
};

exports.GetTracker = async function (_req, res) {
  try {
    const tracker = await db.collection("tracker").get();

    let data = [];

    tracker.forEach((doc) => {
      let _id = doc.id;

      data.push({ _id, ...doc.data() });
    });

    res.json({
      success: true,
      response: data,
      message: "",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      response: null,
      message: error,
    });
  }
};

exports.GetTrackerByID = async function (req, res) {
  try {
    const tracker = await db.collection("tracker").doc(req.params.id).get();

    res.json({
      success: true,
      response: tracker.data(),
      message: "",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      response: null,
      message: error,
    });
  }
};
