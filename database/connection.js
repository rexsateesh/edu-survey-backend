var Sequelize = require('sequelize');

const sequelize = new Sequelize('mariadb://sateesh:sateesh@localhost:3306/survey');

module.exports = sequelize;