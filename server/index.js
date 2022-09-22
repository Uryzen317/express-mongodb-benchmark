// basic http
// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.write("hello world");
//     res.end();
// });
// server.listen(1000);

// express
// const express = require("express");
// const app = express();
// app.post("*", (req, res) => {
//     res.send("hello world");
// });
// app.listen(1000);

// sign jwt with express
// const express = require("express");
// const jwt = require("jsonwebtoken");
// const app = express();
// app.post("*", (req, res) => {
//     let token = jwt.sign("a", "b");
//     res.send(token);
// });
// app.listen(1000);

// verify jwt with express
// const express = require("express");
// const jwt = require("jsonwebtoken");
// const app = express();
// app.post("*", (req, res) => {
//     let token = jwt.verify(
//         "eyJhbGciOiJIUzI1NiJ9.YQ.PrSVmEzsOLiTgzWfslar1L11W5nJXm8Vj0OFoGYUIjs",
//         "b"
//     );
//     res.send(token);
// });
// app.listen(1000);

// mongoose create user with express
// const express = require("express");
// const mongoose = require("mongoose");
// mongoose.connect(
//     "mongodb://username:password@host/collection"
// );
// let schema = mongoose.Schema({
//     name: { type: String },
//     password: { type: String }
// });
// let model = mongoose.model("model", schema);
// const app = express();
// app.post("*", (req, res) => {
//     let user = new model({
//         name: "testtest",
//         password: "testtest"
//     });
//     user.save().then(results => {
//         res.send(results);
//     });
// });
// app.listen(1000);

// mongoose find query with express
// const express = require("express");
// const mongoose = require("mongoose");
// mongoose.connect(
//      "mongodb://username:password@host/collection"
// );
// let schema = mongoose.Schema({
//     name: { type: String },
//     password: { type: String }
// });
// let model = mongoose.model("model", schema);
// const app = express();
// app.post("*", async (req, res) => {
//     let user = await model.findOne({});
//     res.send(user);
// });
// app.listen(1000);

// mongoose update with express
// const express = require("express");
// const mongoose = require("mongoose");
// mongoose.connect(
//     "mongodb://username:password@host/collection"
// );
// let schema = mongoose.Schema({
//     name: { type: String },
//     password: { type: String }
// });
// let model = mongoose.model("model", schema);
// const app = express();
// app.post("*", async (req, res) => {
//     let user = await model.findOneAndUpdate({}, { $set: { name: "a" } });
//     res.send(user);
// });
// app.listen(1000);

// mongodb connection speed (ping)
// const express = require("express");
// const mongoose = require("mongoose");
// let start = new Date();
// mongoose
//     .connect(
//          "mongodb://username:password@host/collection"
//     )
//     .then(() => {
//         console.log(new Date() - start);
//     });
// const app = express();
// app.post("*", (req, res) => {
//     res.send("hello world");
// });
// app.listen(1000);
