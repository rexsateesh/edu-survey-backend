const express = require('express');
const router = express.Router();
const {response} = require('../utils/helper');
const {survey, question, answer, userAnswer, user} = require('../database');

router.get('/', async (req, res, next) => {
    try {
        const surveys = await survey.findOne({
            include: [question], 
            attributes: {exclude: ['createdAt', 'updatedAt']}
        });

        res.send(response('Success', surveys));
    } catch (e) {
        res.status(422).send(response('Something not working'));
    }
});

router.post('/', async (req, res, next) => {
    const { answers, user: userData } = req.body;
    if (typeof userData === 'undefined' || typeof answers === 'undefined' || answers.length == 0) {
        return res.status(422).send(response('Body is empty'));
    }

    const batch = [];
    const {firstName, lastName, email: userName} = userData;

    const surveyUser = await user.create({firstName, lastName, userName});

    answers.forEach(q => {
        if (typeof q.answer === 'string') {
            batch.push({
                userId: surveyUser.id, 
                questionId: q.questionId, 
                answer: q.answer
            });

        } else if (q.answer.length > 0) {
            q.answer.forEach(aId => {
                batch.push({
                    userId: surveyUser.id, 
                    questionId: q.questionId, 
                    answerId: aId
                });
            });
        }
    });

    if (batch.length > 0) {
        userAnswer.bulkCreate(batch);
        return res.send(response('Success'));
    }

    res.status(422).send(response('Unable to parse body'));
});

router.get('/questions/:questionId', async (req, res, next) => {
    try {
        const surveys = await answer.findAll({
            where: {questionId: req.params.questionId}, 
            attributes: {exclude: ['createdAt', 'updatedAt']}
        });

        res.send(response('Success', surveys));
    } catch (e) {
        res.status(422).send(response('Something not working'));
    }
});

module.exports = router;
