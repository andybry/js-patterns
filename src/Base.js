//= require bower_components/underscore/underscore

/**
 * Base class for all other classes. Contains
 * a utility method (createClass) for generating
 * all other classes.
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
  create: function() {
    var instance = Object.create(this);
    return this._init.apply(instance, arguments);
  },

  /**
   * Classes should override this to initialise the object.
   * The method should always return the 'this' object.
   *
   * @private
   * @instance
   */
  _init: function() {
    return this;
  },

  /**
   * Create a class from a sequence of prototypes.
   * This allows us to create classes inheriting
   * from parents. Base is always added as the
   * first prototype. The other prototypes are
   * added in the order that they are supplied.
   * Thus prototypes that are given later will
   * override earlier ones.
   *
   * @public
   * @static
   * @param {...object} arguments - the prototypes
   * @return Base
   */
  createClass: function() {
    var prototypes = [{}, Base];
    for(var index in arguments) {
      prototypes.push(arguments[index]);
    }
    return _.extend.apply(_, prototypes);
  }

};