module.exports = (sequelize, Sequelize) => {

  const Student = sequelize.define('student', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: Sequelize.INTEGER,
    name: Sequelize.STRING,
    birthday: Sequelize.INTEGER,
    status: Sequelize.STRING,
    address: Sequelize.STRING,
    gender: Sequelize.INTEGER,
    classCode: Sequelize.STRING,
  }, {
    timestamps: false
  });

  return Student;
}