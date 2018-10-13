var assert = require('chai').assert;
var quiz = require('../quiz');

describe('Quiz', function () {

  describe('Starting a new quiz', function () {
    it('should return a new question', function () {
      const newQuestion = quiz.newQuestion(1);
      assert.isOk(newQuestion)
      assert.isOk(newQuestion.question);
      assert.equal(newQuestion.count, 1);
      assert.equal(newQuestion.score, 0);
    });
  });

  describe('Starting a new quiz with level 1', function () {
    it('should return a new addition question with numbers between 1 and 9', function () {
      const newQuestion = quiz.newQuestion(1);
      assert.isOk(newQuestion)
      assert.isOk(newQuestion.question);
      assert.isTrue(newQuestion.question.includes(' plus '));
      assert.equal(newQuestion.count, 1);
      assert.equal(newQuestion.score, 0);
    });
  });

  describe('Handling a correct response', function () {
    it('should add to score and return a new question', function () {

      const question = quiz.newQuestion(1);
      const answer = question.correctAnswer;

      var nextQuestionCallback = function (nextQuestion, speechOutput) {
        assert.isOk(nextQuestion)
        assert.isOk(nextQuestion, 'nextQuestion is undefined');
        assert.isOk(speechOutput, 'speechOutput is undefined');
        assert.equal(nextQuestion.score, question.score + 1, 'score: "' + nextQuestion.score + '"');
      };

      var endQuizCallback = function (speechOutput) {
        assert.isNotOk('endQuizCallback', 'should not end quiz');
      };

      quiz.handleResponse(question, answer, nextQuestionCallback, endQuizCallback);
    });
  });

  describe('Handling a incorrect response', function () {
    it('should not add to score and return a new question', function () {

      const question = quiz.newQuestion(1);
      const wrongAnswer = question.correctAnswer + 1;

      var nextQuestionCallback = function (nextQuestion, speechOutput) {
        assert.isOk(nextQuestion)
        assert.isOk(nextQuestion, 'nextQuestion is undefined');
        assert.isOk(speechOutput, 'speechOutput is undefined');
        assert.equal(nextQuestion.score, question.score, 'score: "' + nextQuestion.score + '"');
      };

      var endQuizCallback = function (speechOutput) {
        assert.isNotOk('endQuizCallback', 'should not end quiz');
      };

      quiz.handleResponse(question, wrongAnswer, nextQuestionCallback, endQuizCallback);
    });
  });

  describe('After the last question', function () {
    it('should end quiz', function () {

      const question = quiz.newQuestion(1);
      question.count = 10;
      const wrongAnswer = question.correctAnswer + 1;

      var nextQuestionCallback = function (nextQuestion, speechOutput) {
        assert.isNotOk('nextQuestionCallback', 'should not get next Question');
      };

      var endQuizCallback = function (speechOutput) {
        assert.isOk(speechOutput, 'speechOutput is undefined');
        assert.isOk('endQuizCallback', 'should end quiz');
      };

      quiz.handleResponse(question, wrongAnswer, nextQuestionCallback, endQuizCallback);
    });
  });

});