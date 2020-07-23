const mongoose = require("mongoose");
const keys = require("../config/keys");

require("../models/User");
require("../models/Blog");
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
    console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });;
jest.setTimeout(30000);
