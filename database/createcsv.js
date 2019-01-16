const fs = require('fs');
const path = require('path');
const faker = require('faker');

// let header='\n'
let header = "finalstar, accuracystar, locationstar, checkinstar, cleanlinessstar, valuestar, communicationstar, userid, username, reviewcontent, productid, shijian, userpic\n"
let writeStream = fs.createWriteStream('example.csv');
writeStream.write(header);

let startingTime;
function writeTenMillionTimes(writer, encoding, callback) {
    startingTime = Date.now();
    let i = 0;
    write();
    function write() {
      let ok = true;
      do {
        i++;
        let content = `${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 900000})}, ${faker.name.firstName()}, ${faker.lorem.paragraph()}, ${faker.random.number({'min': 0, 'max': 900000})}, ${faker.date.recent()}, http://lorempixel.com/${faker.random.number({'min': 0, 'max': 1000000})} \n`;
        let contentLastTen = `${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 900000, 'max': 1000000})}, ${faker.name.firstName()}, ${faker.lorem.paragraph()}, ${faker.random.number({'min': 900000, 'max': 1000000})}, ${faker.date.recent()}, http://lorempixel.com/${faker.random.number({'min': 0, 'max': 1000000})} \n`;
        if(i > 9000000 && i < 10000000){
            ok = writer.write(contentLastTen, encoding);
        } else if (i === 10000000) {
          // last time!
          writer.write(contentLastTen, encoding, callback);
        } else {
          // see if we should continue, or wait
          // don't pass the callback, because we're not done yet.
          ok = writer.write(content, encoding);
        }
      } while (i < 10000000 && ok);
      if (i < 10000000) {
        // had to stop early!
        // write some more once it drains
        writer.once('drain', write);
      }
    }
  }

writeTenMillionTimes(writeStream, 'utf-8', ()=>{
    let finishTime = Date.now()
    writeStream.end()
    console.log(finishTime - startingTime)
})


// for(let i=0; i <= 1000000; i++) {
//     writeStream.write();
// }
// // (9, 3, 4, 4, 3, 1, 1, 5, 9, 'Sinclare', 'Donec m ac, lobortis vel, dapibus at, diam.', 11177, '6/24/2016', 'http://dummyimage.com/203x244.jpg/dddddd/000000');
// writeStream.on('finish', () => {  
//     console.log('wrote all data to file');
// });

// writeStream.end()