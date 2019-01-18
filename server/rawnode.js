let http = require('http');
let { getAllHelper, getAllFromIdHelper, postOneHelper, deleteOneHelper, updateOneHelper } = require('../database/dbHelper.js');
// let url = require('url');

let server = http.createServer(function (req, res) {

  let body = [];
  // let url_parts = url.parse(req.url, true);
  // let query = url_parts.query;
  if (req.url === '/reviews') {
    let endpoint = req.url.slice(8);
    if (req.method === "GET") {
        // console.log(req.url, "it is this url now")
        console.log('end point is this bruah', endpoint)
        // console.log('endpoint is this', endpoint)
        if (endpoint) {
            getAllFromIdHelper(endpoint, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                body = data;
                let stringifiedBody = JSON.stringify(body);
                if (stringifiedBody === '{}') {
                res.writeHead(404, { 'Content-Type': 'application/json' })
                res.end('NOT FOUND')
                }
                // console.log(stringifiedBody, "strigified Body is this")
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(stringifiedBody)
            }
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end('NOT FOUND')
        }
    } else if (req.method === "POST") {
        let data = '';
        req.on('error', (err) => {
        console.error(err);
        }).on('data', (chunk) => {
        data += chunk;
        }).on('end', () => {
        // console.log(data, 'data')
        body.push(JSON.parse(data))
        // console.log("data parsed", body)
            postOneHelper(body, (err, data) => {
                if (err) { console.log(err) }
                else { console.log(data) }
            })
        res.on('error', (err) => {
            console.error(err);
        });
        res.writeHead(201, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(body));
        res.end("posted");
        });
    } else if (req.method === "DELETE"){    
        if (endpoint) {
            deleteOneHelper(endpoint, (err, data) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'application/json' })
                    res.end(err)
                } else {
                    res.writeHead(201, { 'Content-Type': 'application/json' })
                    res.write(JSON.stringify(body));
                    res.end("posted");
                }
            });
        }
    } 
  } 
});



server.listen(3000, function () {
  console.log('bare node server listening on port 3000!')
})
