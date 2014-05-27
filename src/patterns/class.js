/**
 * @class
 * @augments Base
 */
var MyClass = Base.extend({

  /**
   * @private
   * @param {string} message
   * @returns MyClass
   */
  _init: function(message) {
    console.log('Initialisation code goes here.');
    /**
     * @private
     */
    this._exampleMember = message;
    return this;
  },

  /**
   * An example public instance method
   *
   * @public
   */
  exampleMethod: function() {
    console.log(this._exampleMember);
  }

});

// run the code
/**
 * @type MyClass
 */
var myObject = MyClass.create('Output this message too');
myObject.exampleMethod();