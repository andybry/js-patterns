//= require src/Base

/**
 * An example parent class
 *
 * @class
 * @augments Base
 */
var Parent = Base.extend({

  methodToBeOverridden: function() {
    console.log('This should never run');
  },

  parentMethod: function() {
    console.log('In the parent method');
  }

});

/**
 * @class
 * @augments Parent
 */
var Child = Base.extend(Parent, {

  methodToBeOverridden: function() {
    console.log('The overridden method in the child');
  },

  childMethod: function() {
    console.log('The child method');
  }

});

/**
 * @type Child
 */
var child = Child.create();
child.parentMethod();
child.methodToBeOverridden();
child.childMethod();
