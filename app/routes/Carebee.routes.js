module.exports = app => {
  const CarebeeController = require("../controllers/registerUser.controller.js");
  const AnxietyController = require("../controllers/anxietyTest.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", CarebeeController.createUser);

  // Retrieve all Tutorials
  router.post("/anxiety", AnxietyController.anxietyTestScore);

  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.post("/findUser", CarebeeController.findOneUser);

  // // Update a Tutorial with id
  router.put("/update/:id", CarebeeController.updateUserInfo);

  router.post("/anxietyScore", AnxietyController.anxietyTestScore )

  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // // Create a new Tutorial
  // router.delete("/", tutorials.deleteAll);

  app.use("/api/Carebee", router);
};
