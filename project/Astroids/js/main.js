var Game = Class.extend({

  init: function() {
    this.canvas = new Canvas(640, 480);
  },

  run: function() {
      this.canvas.animate(function(){
        console.log('test2')
      })
  }
});
