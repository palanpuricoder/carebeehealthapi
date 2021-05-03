const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.UserModel = require("./registerUser.model.js")(mongoose);
db.AnxietyModel =  require("./anxietyTest.model")(mongoose);

module.exports = db;
