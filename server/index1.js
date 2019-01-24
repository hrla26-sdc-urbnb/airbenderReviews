// // let nr = require('newrelic');
// let http = require('http');
// const fs = require('fs');
// // let url = require("url");
// const path = require('path');

// let { getAllFromIdHelper, postOneHelper, deleteOneHelper, updateOneHelper } = require("../database/dbHelper.js");

// let server = http.createServer(function(req, res) {
// // let url_parts = url.parse(req.url, true);

// // let query = url_parts.query;
// // let query = url_parts;
// // console.log(req.url, 'query is there')
//   let body = [];

//   const headers = {
//     'access-control-allow-origin': '*',
//     'access-control-allow-methods': 'GET, POST, PUT, DELETE',
//     'access-control-allow-headers': 'Origin, X-Requested-With, Content-Type, Accept',
//     'Content-Type': 'application/json'
//   }
//   // console.log(req.url, 'here is url')
//   let endpoint;
//   if(req.url !== '/' && req.url !== '/bundle.js'){
    
//     // console.log(req.url, 'here is url3')
//     endpoint = req.url.match(/\d+/)[0];
//   }

// //   if (req.url.slice(0, 8) === "/reviews") {
//     if (req.method === "GET") {
//       if (req.url === '/') {
//         // console.log(req.url, 'here is url2')

//         headers['Content-Type'] = 'text/html'
//         fs.readFile(path.join(__dirname, '../client/dist/index.html'), 'utf8', (err, data) => {
//           // if (err) {
//           //   res.writeHead(404, headers);
//           //   res.end(err);
//           // }
//           // console.log(data);
//           res.writeHead(200, headers);
//           res.end(data);
//         })
//       } else if(req.url === '/bundle.js'){
//         fs.readFile(path.join(__dirname, '../client/dist/bundle.js'), 'utf8', (err, data) => {
//           // console.log(data);
//           res.writeHead(200, headers);
//           res.end(data);
//       })} else if (endpoint) {
//         console.log('its htiting here')
//         getAllFromIdHelper(endpoint, (err, data) => {
//           if (err) {
//             console.log(err);
//           } else {
//             body = data;
//             let stringifiedBody = JSON.stringify(body);
//             if (stringifiedBody === "{}") {
//               res.writeHead(404, { "Content-Type": "application/json" });
//               res.end("NOT FOUND");
//             }
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.end(stringifiedBody);
//           }
//         });
//       } else {
//         // console.log(req.url, 'its this')
//         res.writeHead(404, { "Content-Type": "application/json" });
//         res.end("NOT FOUND");
//       }
//     } else if (req.method === "POST" && endpoint === undefined) {
//       let data = "";
//       req.on("error", err => {
//           console.error(err);
//         })
//         .on("data", chunk => {
//           data += chunk;
//         })
//         .on("end", () => {
//           body.push(JSON.parse(data));
//           postOneHelper(body, (err, data) => {
//             if (err) {
//               console.log(err);
//             } else {
//               console.log(data);
//             }
//           });
//           res.on("error", err => {
//             res.writeHead(404, { "Content-Type": "application/json" });
//             res.end("NOT FOUND");
//           });
//           // res.writeHead(201, { 'Content-Type': 'application/json' })
//           // res.write(JSON.stringify(body));
//           res.end("posted");
//         });
//     } else if (req.method === "DELETE") {
//       if (endpoint) {
//         deleteOneHelper(endpoint, (err, data) => {
//           if (err) {
//             res.writeHead(404);
//             res.end(err);
//           } else {
//             res.writeHead(201);
//             res.end("deleted");
//           }
//         });
//       }
//     } else if (req.method === "PUT") {
//       if (endpoint) {
//         let data = "";
//         req
//           .on("error", err => {
//             console.error(err);
//           })
//           .on("data", chunk => {
//             data += chunk;
//           })
//           .on("end", () => {
//             body.push(JSON.parse(data));
//             updateOneHelper(body, endpoint, (err, data) => {
//               if (err) {
//                 console.log(err);
//               } else {
//                 console.log(data);
//               }
//             });
//             res.on("error", err => {
//               console.error(err);
//             });
//             res.writeHead(201, { "Content-Type": "application/json" });
//             res.write(JSON.stringify(body));
//             res.end("updated");
//           });
//       }
//     }
// //   }
// });

// server.listen(2019, function() {
//   console.log("bare node server listening on port 2019!");
// });
