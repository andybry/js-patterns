/**
 * @class
 * @augments Base
 */
var MyClass = Base.createClass({

  /**
   * @private
   * @instance
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
   * @instance
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