
var pressed = false;
$(document).keydown(function(e) {
    if(!pressed){
        width = $(this).width();
        height = $(this).height();
        switch (e.which) {
            case 37:
                $('div').stop().animate({
                    left: '-=' + width
                }, 2000); //left arrow key
                break;
            case 38:
                $('div').stop().animate({
                    top: '-=' + height
                }, 2000); //up arrow key
                break;
            case 39:
                $('div').stop().animate({
                    left: '+=' + width
                }, 2000); //right arrow key
                break;
            case 40:
                $('div').stop().animate({
                    top: '+=' + height
                }, 2000); //bottom arrow key
                break;
        }
    }
    pressed = true;
}).keyup(function(){
    $('div').stop();
    pressed = false;
});

var newCss = { 'zoom' : ui.value };

// Replace with transform, if supported
if('WebkitTransform' in document.body.style)
{
    newCss = { '-webkit-transform': 'scale(' + ui.value + ')'};
}
// repeat for supported browsers
else if('transform' in document.body.style)
{
    newCss = { 'transform': 'scale(' + ui.value + ')'};
}

// Set the CSS
$('.user-text').css(newCss)
                                                                                                                                                        g
