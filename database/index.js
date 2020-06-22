const survey = require('./survey');
const user = require('./user');
const question = require('./question');
const answer = require('./answer');
const userAnswer = require('./user_answer');

survey.hasMany(question, {onDelete: 'cascade', foreignKey: 'survey_id', hooks: true});
question.belongsTo(survey);

question.hasMany(answer, {onDelete: 'cascade', foreignKey: 'question_id', hooks: true});
answer.belongsTo(question);

user.hasMany(userAnswer, {onDelete: 'cascade', foreignKey: 'user_id', hooks: true});

module.exports = {
    survey,
    user,
    question,
    answer,
    userAnswer
}