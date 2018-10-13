'use strict';

const speak = require('./speak.js');

class QuestionFactory {

    constructor(level) {
        this.level = level;
    }

    addition() {
        const number1 = this.level.addition.number1();
        const number2 = this.level.addition.number2();
        const question = `what is ${number1} plus ${number2}?`;
        const answer = number1 + number2;
        return this.createQuestion(question, answer);
    }

    subtraction() {
        const numbers = [this.level.subtraction.number1(), this.level.subtraction.number2()].sort(this.sortNumber);
        const number1 = numbers[1];
        const number2 = numbers[0];
        const question = `what is ${number1} minus ${number2}?`;
        const answer = number1 - number2;
        return this.createQuestion(question, answer);
    }

    multiplication() {
        const number1 = this.level.multiplication.number1();
        const number2 = this.level.multiplication.number2();
        const question = `what is ${number1} times ${number2}?`;
        const answer = number1 * number2;
        return this.createQuestion(question, answer);
    }

    division() {
        const number1 = this.level.division.number1();
        const number2 = this.level.division.number2();
        const product = number1 * number2;
        const question = `what is ${product} divided by ${number1}?`;
        const answer = number2;
        return this.createQuestion(question, answer);
    }

    addToNumber() {
        const numbers = [this.level.addToNumber.number1(), this.level.addToNumber.number2()].sort(this.sortNumber);
        const number1 = numbers[1];
        const number2 = numbers[0];

        const question = `what number plus ${number2} will give you ${number1}`;
        const answer = number1 - number2;
        return this.createQuestion(question, answer);
    }

    createQuestion(question, answer) {

        const helpOutput = speak.combine(
            [
                speak.help.anwser,
                question
            ]);

        return {
            question: question,
            correctAnswer: answer,
            help: helpOutput
        };
    }

    sortNumber(a, b) {
        return a - b;
    }
}

module.exports = QuestionFactory;