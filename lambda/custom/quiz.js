'use strict';

const speak = require('./speak');
const QuestionFactory = require('./questionFactory');
const Operation = require('./operations');
const Levels = require('./levels');

const MAX_QUESTIONS = 10;

function isCorrectAnswer(question, givenAnswer) {
    return question.correctAnswer == givenAnswer;
}

function newQuestion(level, count) {
    const operation = getOperation(level, count)
    const questionFactory = new QuestionFactory(level);

    switch (operation) {
        case Operation.ADDITION:
            return questionFactory.addition();
        case Operation.SUBTRACTION:
            return questionFactory.subtraction();
        case Operation.MULTIPLICATION:
            return questionFactory.multiplication();
        case Operation.DIVISION:
            return questionFactory.division();
        case Operation.ADD_TO_NUMBER:
            return questionFactory.addToNumber();
    }
}

function getOperation(level, currentCount) {
    const operations = Object.keys(level);
    let questionCount = 0;

    for (var operation of operations) {
        questionCount = questionCount + level[operation].numberOfQuestions;
        if (currentCount <= questionCount)
            return operation;
    }

    return operations[operations.length - 1];
}

module.exports = {
    newQuestion(level) {
        let question = newQuestion(Levels[level - 1], 1);
        question.count = 1;
        question.score = 0;
        question.level = level;
        return question;
    },

    handleResponse(question, givenAnswer, goToNextQuestionCallback, endQuizCallback) {
        const isCorrect = isCorrectAnswer(question, givenAnswer);
        const response = isCorrect ? speak.encourageCorrectAnswer() : speak.encourageWrongAnswer(givenAnswer, question.correctAnswer);
        const score = isCorrect ? question.score + 1 : question.score;

        if (question.count >= MAX_QUESTIONS) {
            const speechOutput = speak.combine(
                [
                    speak.say(response),
                    speak.endQuiz(score, MAX_QUESTIONS)
                ]);

            return endQuizCallback(speechOutput);
        }

        const count = question.count + 1;
        var nextQuestion = newQuestion(Levels[question.level - 1], count);
        nextQuestion.count = count;
        nextQuestion.score = score;
        nextQuestion.level = question.level;

        const speechOutput = speak.combine(
            [
                speak.say(response),
                speak.say(nextQuestion.question)
            ]);

        return goToNextQuestionCallback(nextQuestion, speechOutput);
    }
};