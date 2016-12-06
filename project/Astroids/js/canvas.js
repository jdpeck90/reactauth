var Canvas = Class.extend({
  init: function(width, height){
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;

    this.ctx = (function(ctx){
      ctx.width = ctx.canvas.width;
      ctx.height = ctx.canvas.height;

      return ctx;
    })(this.canvas.getContext('2d'));

    document.body.appendChild(this.canvas)
  },

  animate: function(loop){
    var rf = (function(){
      return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame  ||
      window.mozRequestAnimationFrame     ||
      window.oRequestAnimationFrame       ||
      window.msRequestAnimationFrame
    })();

    var l = function() {
      loop();
      rf(l, self.canvas);
    }
    rf(l, this.canvas)
  }
});
