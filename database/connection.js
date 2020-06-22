var Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://wpousdvkyqxyvf:ad474a31e671dc5a0968307bca2716696467fbef3b84d0ae3df56651d3acb7b4@ec2-52-0-155-79.compute-1.amazonaws.com:5432/d5n1i870snouqk');

module.exports = sequelize;