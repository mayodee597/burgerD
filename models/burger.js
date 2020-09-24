
var orm = require("./../config/orm.js");

var burger = {
selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
insertOne: function(burgerName, cb)  {
    orm.insertOne(burgerName, function(res) {
        cb(res);
    });
},

updateOne: function(id, devoured, cb)  {
    orm.updateOne(id, devoured, function(res) {
        cb(res);
    });
}
}


module.exports = burger;







