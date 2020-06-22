const Sequelize = require('sequelize');
const connection = require('./connection');

class Answer extends Sequelize.Model {}

Answer.init({
        questionId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        answer: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        sequelize: connection,
        modelName: 'answers',
        underscored: true
    }
);

module.exports = Answer;
