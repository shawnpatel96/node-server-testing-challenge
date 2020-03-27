module.exports = {
    all,
    add,
    remove
}

const db = require('../data/dbConfig');

function all (){
    return db('resources');
}

function add(resource){
    return db('resources').insert(resource);
}

function remove(id){
    return db('resources').where({id}).del();
}