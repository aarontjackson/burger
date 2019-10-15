// set up connection to connection.js file
var connection = require('./connection.js');

function printQuestionMarks(num) {
    var newArr = [];
    for (let i = 0; i < num; i++) {
        newArr.push('?')
    }
    return newArr.toString();
}

function objToSql(ob) {
    var newArr = [];

    for (var key in ob) {
        var value = ob[key];

        if(Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            newArr.push(key + "=" + value);
        }
    }

    return newArr.toString();
}

// object for all our SQL statement functions
var orm = {
    all: function (tableInput, cb) {
        var sqlQuery = "SELECT * FROM " + tableInput + ";";
        connection.query(sqlQuery, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    create: function (table, cols, vals, cb) {
        var sqlQuery = "INSERT INTO " + table;

        sqlQuery += " (";
        sqlQuery += cols.toString();
        sqlQuery += ") ";
        sqlQuery += "VALUES (";
        sqlQuery += printQuestionMarks(vals.length);
        sqlQuery += ") ";

        console.log(sqlQuery);

        connection.query(sqlQuery, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    update: function (table, objColVals, condition, cb) {
        var sqlQuery = "UPDATE " + table;

        sqlQuery += " SET ";
        sqlQuery += objToSql(objColVals);
        sqlQuery += " WHERE ";
        sqlQuery += condition;

        console.log(sqlQuery);
        
        connection.query(sqlQuery, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }

    // delete: function (table, condition, cb) {
    //     var sqlQuery = "DELETE FROM " + table;

    //     sqlQuery += " WHERE ";
    //     sqlQuery += condition;

    //     connection.query(sqlQuery, function (err, result) {
    //         if (err) {
    //             throw err;
    //         }
    //         cb(result);
    //     })
    // }

};

module.exports = orm;