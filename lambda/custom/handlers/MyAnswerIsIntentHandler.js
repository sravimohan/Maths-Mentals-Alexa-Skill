'use strict';
const quiz = require('../quiz');

const MyAnswerIsIntentHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
        handlerInput.requestEnvelope.request.intent.name === 'MyAnswerIsIntent';
    },
  
    handle(handlerInput) {
      const question = handlerInput.attributesManager.getSessionAttributes();
      const givenAnswer = handlerInput.requestEnvelope.request.intent.slots.Answer.value;
  
      var goToNextQuestion = function (nextQuestion, speechOutput) {
        handlerInput.attributesManager.setSessionAttributes(nextQuestion);
        return handlerInput.responseBuilder
          .speak(speechOutput)
          .reprompt(nextQuestion.question)
          .getResponse();
      };
  
      var endQuiz = function (speechOutput) {
        handlerInput.attributesManager.setSessionAttributes(null);
        return handlerInput.responseBuilder
          .speak(speechOutput)
          .withShouldEndSession(true)
          .getResponse();
      };
  
      return quiz.handleResponse(question, givenAnswer, goToNextQuestion, endQuiz);
    },
  };

  module.exports = MyAnswerIsIntentHandler;