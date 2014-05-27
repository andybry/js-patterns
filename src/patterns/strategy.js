//= require src/Base

/*
 * Decouples an algorithm from the class that uses it.
 *
 * Different versions of the strategy achieve the same thing,
 * but in different ways.
 *
 *
 * Some differences from state:
 *
 * 1. State is responsible for determining its own state, but Strategies are passed in.
 * 2. States replace themselves whereas strategies don't.
 * 3. Strategies handle just one algorithm in the context whereas states handle all the functionality of the context.
 * 4. Different strategies do the same thing, but in different ways.
 * 5. In a strategy the data supplying the conditions exists outside the object. In state the conditions are
 *    contained within the data of the object.
 *
 *
 * Before Refactoring:
 *
 *   We have a piece of existing code which should behave differently in different scenarios.
 *
 *
 * Reasons to Refactor using this pattern:
 *
 *   There is a piece of existing code that we want to replace under circumstances decided outside the context.
 *
 *   OR
 *
 *   We want to simplify existing code because we want to add functionality to it.
 *
 *
 *
 *
 * Steps in refactoring:
 *
 *   1. Move the code into a method within the context
 *   2. Create a new object (the strategy)
 *   3. Move the method into the object
 *   4. Pass the strategy object into the context.
 *   5. Document the interfaces
 */

/**
 * @class
 * @augments Base
 */
var StrategyContext = Base.extend({

  /**
   * @param {AbstractLoggingStrategy} strategy
   * @returns {StrategyContext}
   */
  _init: function(strategy) {
    this.strategy = strategy;
    return this;
  },

  perform: function() {
    this.strategy.log("Andrew Ralph Bryant");
  }

});

/**
 * Interface for the logging strategies
 *
 * @class
 * @augments Base
 */
var AbstractLoggingStrategy = Base.extend({
  /**
   * Log the message
   *
   * @abstract
   * @param {string} message
   */
  log: function(message) {
    throw 'log is an abstract method';
  }

});

/**
 * @class
 * @augments {AbstractLoggingStrategy}                                                                                     r
 */
var LoggingStrategy = Base.extend(AbstractLoggingStrategy, {

  log: function (message) {
    console.log(message);
  }

});

/**
 * @class
 * @augments {AbstractLoggingStrategy}
 */
var LoggingWithDateStrategy = Base.extend(AbstractLoggingStrategy, {

  log: function(message) {
    console.log(new Date(), message);
  }

});

// run the code
var loggingStrategy = LoggingStrategy.create();
var logContext = StrategyContext.create(loggingStrategy);
logContext.perform();
var loggingWithDateStrategy = LoggingWithDateStrategy.create();
var logWithDateContext = StrategyContext.create(loggingWithDateStrategy);
logWithDateContext.perform();
