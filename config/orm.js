var connection = require("./connection.js");

var orm = {
    selectAll: function(cb) {
        
        var queryString =  "Select * FROM  burger; ";
        const q = connection.query(queryString,  function(err, result) {
            if (err) throw err;
            cb(result);
        });
       
    },
    insertOne: function(burgerName, cb) {
        var queryString = "insert into burger (burger_name, devoured) values ('"+ burgerName + "', 0);";
        const q = connection.query(queryString, burgerName, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }, 

    updateOne: function(id, devoured, cb) {
        var queryString = " update burger set devoured = " + devoured + " where id = " + id + ";";
        const q = connection.query(queryString,  function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }

}

module.exports = orm;



