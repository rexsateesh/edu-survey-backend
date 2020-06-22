const Sequelize = require('sequelize');
const connection = require('./connection');

class Question extends Sequelize.Model {}

Question.init({
        surveyId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        question: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        sequelize: connection,
        modelName: 'questions',
        underscored: true,
    }
);

module.exports = Question;
