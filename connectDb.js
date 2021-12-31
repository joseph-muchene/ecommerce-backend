const mongoose = require("mongoose");

function connectDB(req, res) {
  mongoose
    .connect("mongodb://127.0.0.1:27017/ecommerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected succesfully");
    })
    .catch((err) => console.log(err));
}

module.exports = connectDB;
