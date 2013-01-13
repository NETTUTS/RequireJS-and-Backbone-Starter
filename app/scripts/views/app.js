define(['backbone'], function(Backbone) {
  var App = Backbone.View.extend({
    initialize: function() {
      console.log( 'Wahoo!' );
    }
  });

  return App;
});