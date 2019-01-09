const fs = require('fs');
const path = require('path');
const faker = require('faker');

let header = "id, finalStar, accuracyStar, locationStar, checkinStar, cleanlinessStar, valueStar, communicationStar, userId, userName, reviewContent, productId, shijian, userPic"

let writeStream = fs.createWriteStream('example.csv');

writeStream.write(header);

for(let i=0; i <= 1000000; i++) {
    writeStream.write(`${faker.random.number({'min': 0, 'max': 1000000})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.random.number({'min': 0, 'max': 10})}, ${faker.name.findName()}, ${faker.lorem.paragraph()}, ${faker.address.zipCode()}, ${faker.date.recent()}, ${faker.image.imageUrl()} \n`);
}
// (9, 3, 4, 4, 3, 1, 1, 5, 9, 'Sinclare', 'Donec m ac, lobortis vel, dapibus at, diam.', 11177, '6/24/2016', 'http://dummyimage.com/203x244.jpg/dddddd/000000');
writeStream.on('finish', () => {  
    console.log('wrote all data to file');
});

writeStream.end()