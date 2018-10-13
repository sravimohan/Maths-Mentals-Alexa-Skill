'use strict';
const speak = require('../speak');
const Levels = require('../levels');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },

  handle(handlerInput) {
    const speechOutput = speak.combine(
      [
        speak.greeting(),
        speak.askLevel(Levels.length)
      ]);

    const helpOutput = speak.combine(
      [
        speak.help.level,
        speak.askLevel(Levels.length)
      ]);

    handlerInput.attributesManager.setSessionAttributes({
      level: 0,
      help: helpOutput
    });

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .reprompt(speak.letsBegin())
      .getResponse();
  },
};

module.exports = LaunchRequestHandler;