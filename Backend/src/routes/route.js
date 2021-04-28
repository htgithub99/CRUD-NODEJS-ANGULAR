const student = require('../app/controllers/Student')

function route(app) {
    app.get('/api/admin/student', student.list);
    app.post('/api/admin/student/create', student.create);
}

module.exports = route