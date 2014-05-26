//= require bower_components/underscore/underscore

/**
 * Creates classes that have a createInstance
 * factory method instead of a constructor.
 *
 * To create classes with this class use the
 * createClass() method.
 *
 * Classes that require initialisation should
 * override the _init method returning the
 * object intended to be returned from createInstance.
 * Normally this would be 'this'.
 *
 * If a child object is provided to createClass()
 * then the class structure created is:
 *
 * Base <-- Parent <-- Child
 *
 * If no child object is provided to createClass()
 * then the class structure created is:
 *
 * Base <-- Parent
 *
 * NB: Base is not part of the prototype structure.
 *     Its methods are mixed in to every class
 *     created that doesn't already have them
 *     as defaults.
 *     Therefore updating Base at runtime
 *     has no affect on previously created classes.
 *     Updating the Parent class, on the other hand, will
 *     affect child classes and their associated object
 *     instances even if they have already been created.
 *
 * @class
 */
var Base = {

  /**
   * @public
   * @static
   * @param {...object} arguments
   * @returns Base
   */
  createInstance: function() {
    var instance = Object.create(this);
    return this._init.apply(instance, arguments);
  },

  /**
   * @private
   * @instance
   */
  _init: function() {
    return this;
  },

  /**
   * @public
   * @static
   * @param {object} parent
   * @param {object} [child]
   * @return Base
   */
  createClass: function(parent, child) {
    var newClass = child ? Object.create(parent) : parent;
    _.extend(newClass, child);
    return _.defaults(newClass, this);
  }

};