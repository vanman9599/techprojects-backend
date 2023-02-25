const db = require('../database/dbConfig.js');

module.exports = {
 insert, 
 update,
 findById,
 findAll,
 remove

 
}

function insert(lessons){
    return db('lessons')
    .insert(lessons)
    .then(c => {
        if(c){
            return c;
        }else{
            return null
        }
    })
}

function findById(lessonId){
    return db('lessons')
    .where({ lessonId })
    .then(c => {
        if(c){
            return c;
        }else{
            return null;
        }
    })
}

function findAll(){
    return db('lessons')
    .then(c => {
        if(c){
            return c;
        }else{
            return null;
        }
    })
}





function remove(lessonId){
    return db('lessons')
    .where({  lessonId })
    .del()
    .then(num => {
       if(num){
           return num;
       }else{
           return null;
       }
    })
}

function update(changes, lessonId){
    return db('lessons')
    .where({ lessonId })
    .update(changes)
    .then(c => {
        if(c){
            return c;
        }else{
            return null;
        }
    })
}