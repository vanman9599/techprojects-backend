const db = require('../database/dbConfig.js');

module.exports = {
 insert, 
 update,
 findById,
 findAll,
 remove

 
}

function insert(courses){
    return db('courses')
    .insert(courses)
    .then(c => {
        if(c){
            return c;
        }else{
            return null
        }
    })
}

function findById(courseId){
    return db('courses')
    .where({ courseId })
    .then(c => {
        if(c){
            return c;
        }else{
            return null;
        }
    })
}

function findAll(){
    return db('courses')
    .then(c => {
        if(c){
            return c;
        }else{
            return null;
        }
    })
}





function remove(courseId){
    return db('courses')
    .where({  courseId })
    .del()
    .then(num => {
       if(num){
           return num;
       }else{
           return null;
       }
    })
}

function update(changes, courseId){
    return db('courses')
    .where({ courseId })
    .update(changes)
    .then(c => {
        if(c){
            return c;
        }else{
            return null;
        }
    })
}