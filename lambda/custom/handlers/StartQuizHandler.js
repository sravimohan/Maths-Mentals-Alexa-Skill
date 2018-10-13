'use strict';
const speak = require('../speak');
const quiz = require('../quiz');

const StartQuizHandler = {
    canHandle(handlerInput) {
      const question = handlerInput.attributesManager.getSessionAttributes();
      return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
        handlerInput.requestEnvelope.request.intent.name === 'MyAnswerIsIntent' &&
        question.level == 0;
    },
  
    handle(handlerInput) {
      const level = handlerInput.requestEnvelope.request.intent.slots.Answer.value;
      var question = quiz.newQuestion(level);
      handlerInput.attributesManager.setSessionAttributes(question);
  
      const speechOutput = speak.combine(
        [
          speak.letsBegin(),
          speak.say(question.question)
        ]);
  
      return handlerInput.responseBuilder
        .speak(speechOutput)
        .reprompt(speak.letsBegin())
        .getResponse();
    },
  };

  module.exports = StartQuizHandler;