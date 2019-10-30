'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    //declare url for find users   
	app.route('/users/:user_id')
        .get(todoList.findUsers);
};