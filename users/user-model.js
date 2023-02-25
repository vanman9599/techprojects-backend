const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findByRole,
  findById,
  insertUser
};

function findByRole(role) {
  const query = db('users').select('userId', 'email', 'role');

  query.where({ role });
 

  return query;
}

function find(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(userId) {
  return db('users')
    .where({ userId })
    .first();
}

function insertUser(user){
  return db('users')
  .insert(user)
  .then(user =>{
    if(user){
      return user;
    }else{
      return null;
    }
  })
}