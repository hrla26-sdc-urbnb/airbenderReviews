const Pool = require('pg').Pool
const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'airbenderreviews',
  password: '',
  port: 5432,
})

const getUserById = (roomId, cb) => {
  pool.query('SELECT * FROM airbendermock WHERE productId = $1', [roomId], (error, results) => {
    if (error) {
      cb(error);
    }
    cb(null, results);
  })
}

const createUser = (body, cb) => {
  // const { name, email } = request.body

  pool.query('INSERT INTO airbendermock (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      cb(error);
    }
    cb(null, results);
  })
}

const updateUser = (body, updateId, cb) => {
  let objBody = body[0];
  // const {finalstar, accuracystar, locationstar, checkinstar, cleanlinessstar, valuestar, communicationstar, userid, username, reviewcontent, productid, shijian, userpic} = objBody;
  pool.query(
    'UPDATE airbendermock SET finalstar = $1, accuracystar = $2 locationstar = $3 checkinstar = $4 cleanlinessstar = $5 valuestar = $6 communicationstar = $7 userid = $8 username = $9 reviewcontent = $10 productid = $11 shijian = $12 userpic = $13 WHERE id = $14',
    [objBody.finalStar, objBody.accuracystar, objBody.locationstar, objBody.checkinstar, objBody.cleanlinessstar, objBody.valuestar, objBody.communicationstar, objBody.userid, objBody.username, objBody.reviewcontent, objBody.productid, objBody.shijian, objBody.userpic, updateId],
    (error, results) => {
      if (error) {
        cb(error);
      }
      cb(null, results);
    }
  )
}

const deleteUser = (deleteId, cb) => {
  // const id = parseInt(request.params.id)

  pool.query('DELETE FROM airbendermock WHERE id = $1', [deleteId], (error, results) => {
    if (error) {
      cb(error);
    }
    cb(null, results)
  })
}

module.exports = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}