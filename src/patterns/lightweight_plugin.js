/**
 * This demonstrates something very common in jQuery plugins/widgets
 * where the plugin has a defaults object which is extended with the
 * options that is passed to the constructor
 */

var Googlify = Base.extend({

  _init: function(element, options) {
    this._element = element;

    this._defaults = {
      host: 'www.google.co.uk',
      target: '_blank'
    };

    this._options = _.extend({}, this._defaults, options);

    this.convert();
  },

  convert: function() {
    var searchTerm = this._element.textContent;
    var link = '<a' +
        ' href="http://' + this._options.host + '/search?q=' + searchTerm + '"' +
        ' target="' + this._options.target + '">' + searchTerm + '</a>';
    this._element.innerHTML = link;
  }

});