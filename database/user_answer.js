const Sequelize = require('sequelize');
const connection = require('./connection');

class UserAnswer extends Sequelize.Model {}

UserAnswer.init({
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        questionId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        answerId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        answer: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        sequelize: connection,
        modelName: 'user_answers',
        underscored: true
    }
);

module.exports = UserAnswer;
