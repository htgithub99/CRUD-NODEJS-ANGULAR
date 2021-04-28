const db = require('../../config/db');
const Student = db.student;
const student = {}

student.list = async (req, res) => {
    const page = Number(req.query.page) || 1
    const size = Number(req.query.size) || 2
    const {
        count,
        rows: response
    } = await Student.findAndCountAll({
        where: {
            status: 1
        },
        offset: (page - 1) * size,
        limit: size
    })
    res.json({
        data: response,
        total: count
    });
}

student.create = async (req, res) => {
   res.send('OKi', req)
}

module.exports = student