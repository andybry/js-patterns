//= require src/Base

/*
 * Template method allows two similar pieces of code to have
 * the shared components factored into the same place, while
 * allowing the overriding of the parts that are not shared.
 */

/**
 * @class
 * @augments Base
 */
var TemplateMethodContext = Base.extend({

  /**
   * @private
   * @param {string} message
   */
  _init: function(message) {
    this._message = message;
    return this;
  },

  /**
   * Log the message in lower case
   *
   * @public
   */
  logInUpperCase: function() {
    /**
     * @type {AbstractTemplateMethod}
     */
    UpperCaseMethod.create(this._message).perform();
  },

  /**
   * Log the message in upper case
   */
  logInReverse: function() {
    ReverseMethod.create(this._message).perform();
  }

});

/**
 * @class
 * @augments Base
 */
var AbstractTemplateMethod = Base.extend({

  /**
   * @private
   * @param {string} message
   */
  _init: function(message) {
    this._message = message;
    return this;
  },

  /**
   * @public
   */
  perform: function() {
    var output = this._calculateOutput();
    console.log(output);
  },

  _calculateOutput: function() {
    throw '_calculate output is abstract';
  }

});

/**
 * @class
 * @augments AbstractTemplateMethod
 */
var UpperCaseMethod = Base.extend(AbstractTemplateMethod, {

  _calculateOutput: function() {
    return this._message.toUpperCase();
  }

});

/**
 * @class
 * @augments AbstractTemplateMethod
 */
var ReverseMethod = Base.extend(AbstractTemplateMethod, {

  _calculateOutput: function() {
    var chars = this._message.split('');
    var reversedChars = chars.reverse();
    return reversedChars.join('');
  }

});

// run the code
/**
 * @type {TemplateMethodContext}
 */
var context = TemplateMethodContext.create('This is my message');
context.logInUpperCase();
context.logInReverse();