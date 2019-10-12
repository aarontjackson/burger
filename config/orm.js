// set up connection to connection.js file
var connection = require('../config/connection.js');

// object for all our SQL statement functions
var orm = {
findAll: function(tableName, cb){
    var sqlQuery = "SELECT * FROM ??";
    var data = [tableName];
    connection.query(sqlQuery, data, function(err, result){
        if (err){
            throw err;
        }
        cb(result);
    })
},

insertOne: function(table, cols, vals, cb) {
    var sqlQuery = "INSERT INTO ?? ("
        sqlQuery += cols.toString() + ") "
        sqlQuery += "VALUES ("
        sqlQuery += printQMarks(vals) + ")"

        vals.unshift(tableName)

    connection.query(sqlQuery, vals, function(err, result){
        cb(result)
    })
},

updateOne: function(table, objColvals, condition, cb) {
    var sqlQuery = "UPDATE ?? ("
    sqlQuery += " SET ("
    sqlQuery += objtoSql(objcolvals) + ") "
    sqlQuery += "WHERE ("
    sqlQuery += condition + ")"

    vals.unshift(tableName)

connection.query(sqlQuery, function(err, result) {
    if(err) {
        throw err;
    }

    cb(result);
});
}

};

function printQMarks(vals) {
    var newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push('?')
    }
    return newArr.toString()
}

module.exports = orm;