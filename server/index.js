let http = require("http");
// let url = require("url");

let { getAllFromIdHelper, postOneHelper, deleteOneHelper, updateOneHelper } = require("../database/dbHelper.js");
let nr = require("newrelic");

let server = http.createServer(function(req, res) {
// let url_parts = url.parse(req.url, true);

// let query = url_parts.query;
// let query = url_parts;
// console.log(req.url, 'query is there')
  let body = [];
  let endpoint = req.url.match(/\d+/)[0];

//   if (req.url.slice(0, 8) === "/reviews") {
    if (req.method === "GET") {
      if (endpoint) {
        getAllFromIdHelper(endpoint, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            body = data;
            let stringifiedBody = JSON.stringify(body);
            if (stringifiedBody === "{}") {
              res.writeHead(404, { "Content-Type": "application/json" });
              res.end("NOT FOUND");
            }
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(stringifiedBody);
          }
        });
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end("NOT FOUND");
      }
    } else if (req.method === "POST" && endpoint === undefined) {
      let data = "";
      req
        .on("error", err => {
          console.error(err);
        })
        .on("data", chunk => {
          data += chunk;
        })
        .on("end", () => {
          body.push(JSON.parse(data));
          postOneHelper(body, (err, data) => {
            if (err) {
              console.log(err);
            } else {
              console.log(data);
            }
          });
          res.on("error", err => {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end("NOT FOUND");
          });
          // res.writeHead(201, { 'Content-Type': 'application/json' })
          // res.write(JSON.stringify(body));
          res.end("posted");
        });
    } else if (req.method === "DELETE") {
      if (endpoint) {
        deleteOneHelper(endpoint, (err, data) => {
          if (err) {
            res.writeHead(404);
            res.end(err);
          } else {
            res.writeHead(201);
            res.end("deleted");
          }
        });
      }
    } else if (req.method === "PUT") {
      if (endpoint) {
        let data = "";
        req
          .on("error", err => {
            console.error(err);
          })
          .on("data", chunk => {
            data += chunk;
          })
          .on("end", () => {
            body.push(JSON.parse(data));
            updateOneHelper(body, endpoint, (err, data) => {
              if (err) {
                console.log(err);
              } else {
                console.log(data);
              }
            });
            res.on("error", err => {
              console.error(err);
            });
            res.writeHead(201, { "Content-Type": "application/json" });
            res.write(JSON.stringify(body));
            res.end("updated");
          });
      }
    }
//   }
});

server.listen(2019, function() {
  console.log("bare node server listening on port 2019!");
});
