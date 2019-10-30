'use strict';

var response = require('./res');
var connection = require('./conn');

//declare find user function
exports.findUsers = function(req, res) {
    // declare user id parameter
    var user_id = req.params.user_id;

    connection.query('select module_name, module_order from moduledtl where user_id = ?',
    [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

