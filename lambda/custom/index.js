/* eslint-disable  func-names */
/* eslint-disable  no-console */

'use strict';
const Alexa = require('ask-sdk-core');
const skillBuilder = Alexa.SkillBuilders.custom();

//handlers
const LaunchRequestHandler = require('./handlers/LaunchRequestHandler');
const StartQuizHandler = require('./handlers/StartQuizHandler');
const MyAnswerIsIntentHandler = require('./handlers/MyAnswerIsIntentHandler');
const HelpIntentHandler = require('./handlers/HelpIntentHandler');

const StandardHandlers = require('./handlers/StandardHandlers');
const CancelAndStopIntentHandler = StandardHandlers.CancelAndStopIntentHandler;
const SessionEndedRequestHandler = StandardHandlers.SessionEndedRequestHandler;
const ErrorHandler = StandardHandlers.ErrorHandler;

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    StartQuizHandler,
    MyAnswerIsIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();