//= require src/Base

// ############################################
// CONTEXT CLASS                              #
// ############################################

/*
 * State allows behaviour which is associated with a
 * given conditional expression to be moved into a separate
 * object in order to make the code more readable.
 *
 * Before Refactoring:
 *
 * - The object that we wish to clean up is called the context.
 * - The object will have code that depends on the value of
 *   one conditional expression.
 *
 *
 * Reasons to Refactor using this pattern:
 *
 *   We want the context object to behave differently depending on
 *   the state of its internal data.
 *
 *   OR
 *
 *   We want to simplify conditional statements that already exist so that we can add functionality.
 *
 *
 * Steps in refactoring:
 *
 * 1. Create a state object for each of the behaviours.
 * 2. In each of the state objects create a method for each of
 *    the pieces of code inside the state objects.
 * 3. Replace the code with calls to these methods.
 * 4. Replace the conditionals with a calculation of which
 *    object to use.
 * 5. Move the object into a state member.
 * 6. Document the interface.
 * 7. Move the calculation of which state object is set
 *    into its own method.
 *
 * Example:
 */
/**
 * @class
 * @augments Base
 */
var StateContext = Base.createClass({

  /**
   * @returns {StateContext}
   * @private
   */
  _init: function() {
    this.state = State1.createInstance();
    return this;
  },

  /**
   * @public
   * @instance
   */
  perform: function() {
    this.state.perform();
  },

  /**
   * Swap between the two possible states.
   *
   * @public
   * @instance
   */
  swapState: function() {
    var name = this.state.name();
    switch(name) {
      case "state 1":
        this.state = State2.createInstance();
        break;
      case "state 2":
        this.state = State1.createInstance();
    }
  }

});

// ############################################
// # DIFFERENT STATE OBJECTS                  #
// ############################################

/**
 * @class
 * @augments Base
 */
var AbstractState = Base.createClass({

  perform: function() {
    throw 'perform is an abstract method';
  }

});

/**
 * @class
 * @augments AbstractState
 */
var State1 = Base.createClass(AbstractState, {

  perform: function() {
    console.log("in state 1");
  },

  name: function() {
    return "state 1"
  }

});

/**
 * @class
 * @augments AbstractState
 */
var State2 = Base.createClass(AbstractState, {

  perform: function() {
    console.log("in state 2");
  },

  name: function() {
    return "state 2"
  }

});

// run the code
var stateContext = StateContext.createInstance();
stateContext.perform();
stateContext.swapState();
stateContext.perform();
