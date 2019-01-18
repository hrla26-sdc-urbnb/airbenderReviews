const airbendermock = require('./model');


// const getAllFromIdHelper = (roomId, cb) => {
//   pg.connect(connectionString,function(err,client,done) {
//     if(err){
//         console.log("not able to get connection ");
//         cb(err);
//     } 
//     client.query(`SELECT * FROM airbendermock where productid =${roomId}`, function(err,result) {
//         done(); // closing the connection;
//         if(err){
//             console.log(err);
//         }
//         cb(result);
//     });
//   });
// };


// const getAllHelper = (cb) => {
//   airbendermock.findAll({})
//     .then(cb(null, res))
//     .catch(err => cb(err));
// };

const getAllFromIdHelper = (roomId, cb) => {
  airbendermock.findAll({ where: { id: roomId }})
    .then(data=> {
     cb(null, data)
    })
    .catch(err => cb(err));
};


const postOneHelper = (body, cb) => {
  let objBody = body[0];
  const {finalstar, accuracystar, locationstar, checkinstar, cleanlinessstar, valuestar, communicationstar, userid, username, reviewcontent, productid, shijian, userpic} = objBody;
  airbendermock.create({
    finalstar, accuracystar, locationstar, checkinstar, cleanlinessstar, valuestar, communicationstar, userid, username, reviewcontent, productid, shijian, userpic
  })
    .then(data => cb(null, "im posted"))
    .catch(err => cb(err))
}

const deleteOneHelper = (deleteId, cb) => {
  airbendermock.destroy({
    where: { id: deleteId}
  })
  .then(data => cb(null, "deleted yo"))
  .catch(err => cb(err))
}

const updateOneHelper = (body, updateId, cb) => {
  let objBody = body[0];
  const {finalstar, accuracystar, locationstar, checkinstar, cleanlinessstar, valuestar, communicationstar, userid, username, reviewcontent, productid, shijian, userpic} = objBody;
  airbendermock.update(
    { 
      finalstar, accuracystar, locationstar, checkinstar, cleanlinessstar, valuestar, communicationstar, userid, username, reviewcontent, productid, shijian, userpic
    },
    { where: { id: updateId} }
  )
    .then(data => cb('updated son'))
    .catch(err => cb(err))
}

// const postOneHelper = (review, cb) => {
//     pg.connect(connectionString,function(err,client,done) {
//       if(err){
//         console.log("not able to get connection ");
//         cb(err);
//     } 
//     client.query(`SELECT * FROM airbendermock where productid =${roomId}`, function(err,result) {
//         done(); // closing the connection;
//         if(err){
//             console.log(err);
//         }
//         cb(result);
//     });
//   });
// } 

module.exports = { getAllFromIdHelper, postOneHelper, deleteOneHelper, updateOneHelper };
// module.exports = { getAllFromIdHelper };