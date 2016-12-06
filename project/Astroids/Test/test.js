$(document).ready(function () {

var $move = $('.move');
var $body = $('body');
var rotateDeg = 10;
var $projectile = $('<div class="projectile">')
$body.append($projectile)
$(document).keydown(function(e) {

    switch (e.which) {
    case 37:
        $move.css('left', $move.offset().left - rotateDeg );
        break;

    case 38:
        $move.css('top', $move.offset().top  - rotateDeg );
        break;

    case 39:
        $move.css('left', $move.offset().left  + rotateDeg );
        break;

    case 40:
        $move.css('top', $move.offset().top  + rotateDeg);
        break;

// z-Key
    case 90:
        $move.css({ WebkitTransform: 'rotate(' + rotateDeg + 'deg)'});
        rotateDeg -= 10;
        break;

// x-Key
    case 88:
    console.log(rotateDeg)
    rotateDeg += 10;
        $move.css({ WebkitTransform: 'rotate(' + rotateDeg + 'deg)'});
        break;

    case 32:
      createProjectile();
      break;


    }
})



})


