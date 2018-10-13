'use strict';

const random = require('./random');

const greeting = ["Hello", "Welcome", "Hi", "Good Day"];

const begin = ["Lets Go!"];

const correct = [ "Booya", "All righty", "Bam", "Bazinga", "Bingo", "Boom", "Bravo", "Cha Ching", "Cheers", "Dynomite", "Hip hip hooray", "Hurrah", 
    "Hurray", "Huzzah", "Oh dear.  Just kidding.  Hurray", "Kaboom", "Kaching", "Phew", "Righto", "Way to go", "Well done", "Whee", "Woo hoo", "Yay", "Wowza", "Yowsa"]; 

const wrong = ["Argh", "Aw man", "Blarg", "Blast", "Boo", "Bummer", "Darn", "D'oh", "Dun dun dun", "Eek", "Honk", "Le sigh", "Mamma mia", 
    "Oh boy", "Oh dear", "Oof", "Ouch", "Ruh roh", "Shucks", "Uh oh", "Wah wah", "Whoops a daisy", "Yikes"];

const launchHelp = "Say play maths mentals to begin.";

const levelHelp = "Pick a level to play. One is the easiest and five is the hardest.";

const anwserHelp = "When asked a question, just reply with your answer. For example, if asked what is one plus one. reply two.";

module.exports = {
    greeting: function () {
        return `${greeting[random.number(0, greeting.length - 1)]}.`;
    },

    letsBegin: function () {
        return `${begin[random.number(0, begin.length - 1)]}`;
    },

    askLevel: function (maxLevel) {
        return `What level do you want to play? Choose between 1 and ${maxLevel}.`;
    },

    encourageCorrectAnswer: function() {
        return `<say-as interpret-as="interjection">${correct[random.number(0,correct.length-1)]}.</say-as>`;
    },
    
    encourageWrongAnswer: function(givenAnswer, correctAnswer) {
        const sayGivenAnswer = givenAnswer ? `${givenAnswer} is not correct` : 'That is not correct';
        return `<say-as interpret-as="interjection">${wrong[random.number(0,wrong.length-1)]}.</say-as>${sayGivenAnswer}. It is ${correctAnswer}.`;
    },

    endQuiz: function(score, numberOfQuestions){
        return `You got ${score} out of ${numberOfQuestions} right. Thank you for playing.`;
    },

    say: function(words) {
        return words;
    },

    combine: function(sentences){
        return sentences.join(' ');
    },
    
    help: {
        launch : launchHelp,
        level : levelHelp,
        anwser : anwserHelp,
    }
};
