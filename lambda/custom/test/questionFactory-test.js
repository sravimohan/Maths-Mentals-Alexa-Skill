var assert = require('chai').assert;
const QuestionFactory = require('../questionFactory');
const Levels = require('../levels');

describe('Question Factory', function () {

    describe('Creating a new addition question', function () {
        it('should return a new addition question', function () {
            const questionFactory = new QuestionFactory(Levels[0]);
            const newQuestion = questionFactory.addition();
            assert.isTrue(newQuestion.question.includes(' plus '));
            assert.isOk(newQuestion)
        });
    });

    describe('Creating a new subtraction question', function () {
        it('should return a new subtraction question', function () {
            const questionFactory = new QuestionFactory(Levels[0]);
            const newQuestion = questionFactory.subtraction();
            assert.isTrue(newQuestion.question.includes(' minus '));
            assert.isOk(newQuestion)
        });
    });

    describe('Creating a new multiplication question', function () {
        it('should return a new multiplication question', function () {
            const questionFactory = new QuestionFactory(Levels[1]);
            const newQuestion = questionFactory.multiplication();
            assert.isTrue(newQuestion.question.includes(' times '));
            assert.isOk(newQuestion)
        });
    });

    describe('Creating a new division question', function () {
        it('should return a new division question', function () {
            const questionFactory = new QuestionFactory(Levels[1]);
            const newQuestion = questionFactory.division();
            assert.isTrue(newQuestion.question.includes(' by '));
            assert.isOk(newQuestion)
        });
    });

    describe('Creating a new add to number question', function () {
        it('should return a new add to number question', function () {
            const questionFactory = new QuestionFactory(Levels[3]);
            const newQuestion = questionFactory.addToNumber();
            assert.isTrue(newQuestion.question.includes('what number plus'));
            assert.isOk(newQuestion)
        });
    });
});