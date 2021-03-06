/*
 * Provides a single instance and a global point
 * of access.
 *
 * In contrast to a static class, its initialisation
 * can be delayed to a point controlled by the
 * user.
 *
 * It should be used with caution as it
 * can increase coupling.
 *
 */

/**
 * @class
 * @augments Base
 */
var Singleton = Base.extend({

  /**
   * Rename create to getInstance
   *
   * @public
   * @return Singleton
   */
  getInstance: Base.create,

  /**
   * @private
   * @return Singleton
   */
  _init: function() {
    var singleton = this;
    Singleton._init = function() { return singleton };
    // initialisation code goes here
    return this;
  }

});

// run the code
var object1 = Singleton.getInstance();
object1.name = 'ARB';
var object2 = Singleton.getInstance();
console.log(object2.name);