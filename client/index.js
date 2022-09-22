// --------------------------------
// code
// --------------------------------
// sigle request
// const axios = require("axios");
// let start = new Date();
// axios.post("http://localhost:1000", {}).then(results => {
//     console.log((new Date() - start) / 1000, " s for one request");
// });

// a thoudsand requests
// const axios = require("axios");
// let start = new Date();
// requests = [];
// for (let counter = 0; counter < 1000; counter++) {
//     requests.push(axios.post("http://localhost:1000", {}));
// }
// Promise.all(requests).then(result => {
//     console.log((new Date() - start) / 1000, " s for 1000 requests");
// });

// --------------------------------
// benchmarks
// --------------------------------
// <!-- mongodb installed and configured in Germany server --!>

// node http
// ~ 0.055  s for one request
// ~ 1.452  s for 1000 requests

// express
// ~ 0.053  s for one request
// ~ 1.503  s for 1000 requests

// express jwt sign
// ~ 0.052  s for one request
// ~ 1.817  s for 1000 requests

// express jwt verify
// ~ 0.055  s for one request
// ~ 1.819  s for 1000 requsets

// mongodb create user with express
// ~ 0.208  s for one request
// ~ 30  s for 1000 requests

// mongodb find with express
// 0.208  s for one request
// 51.81  s for 1000 requests

// mongodb find and update with express
// 0.209  s for one request
// 49.022  s for 1000 requests

// mongodb connection speed (ping + connection time)
// 1.015  s

// pinging server (ping)
// 0.347  s
