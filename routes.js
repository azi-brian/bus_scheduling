'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/jadwal')
        .get(todoList.jadwal);

     app.route('/jadwal/:id_jadwal')
        .get(todoList.findJadwal);

    app.route('/jadwal')
        .post(todoList.createJadwal);

    app.route('/jadwal')
        .put(todoList.updateJadwal);
    
    app.route('/jadwal')
        .delete(todoList.deleteJadwal);
};