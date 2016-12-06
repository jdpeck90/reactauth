

var points = 0;
$( init );

var wordArray = [];
function init() {

var createDeck = function(){
  // Create the pile of shuffled cards
  alphabet = [
  'A','A','B','C','D','E','E','F',
  'G','H','I','I','J','K','L',
  'M','N','O','O','P','Q','R',
  'S','T','U', 'U','V','W','X',
  'Y','Z' ]
  alphabet.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<10; i++ ) {
    $('<div>' + alphabet[i] + '</div>').attr( 'id', 'liveHand').addClass('letters')
    .appendTo( '#cardPile' )
  }
}
createDeck()
          var cardPile = $('#cardPile')
  //Replenish chips


  // Create the card slots

  for ( var i=1; i<=121; i++ ) {
    $('<div>' + " " + '</div>').attr( 'id', 'cell' ).addClass('slots').appendTo( '#cardSlots' )
  }


function handleCardDrop( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var cardNumber = ui.draggable.data( 'number' );

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again

  // if ( slotNumber ) {
    ui.draggable.removeClass( 'test')
    ui.draggable.attr('position', 'absolute')
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable');
    $(this).droppable('background', 'black');

    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );

    var chips = $('.ui-draggable.correct.resize')
    wordArray.push(ui.helper.context.innerHTML)



  // }

  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go

  // if ( correctCards == 10 ) {
  //   $('#successMessage').show();
  //   $('#successMessage').animate( {
  //     left: '380px',
  //     top: '200px',
  //     width: '400px',
  //     height: '100px',
  //     opacity: 1
  //   } );



var scoreWord = function(word){
    points += word.length;
}
 var $activeChips = $('div.slots.test')
var subButton = document.getElementById('#submit');
subButton.addEventListener('click', function() {

 console.log($activeChips,'activeChips')
    scoreWord(jointArray)
    replenish()
    }, false);
}
// var test2 = $('#cardPile')
// test2.addEventListener('click', function(el) {
// console.log(el)
//     }, false);
 cell = $('.slots')
 $letter = $('div.letters')
var liveHand = $('#liveHand')

$(liveHand).on('click', '.letters' , function(e) {console.log(e)});




}

//  cell = $('.slots')
 letter = $('.letters')


  var test = this.innerHTML
  ('div.cells').on(function(div){
    $(this).addClass('newChip')
  div.toElement.innerText = test;
    e.currentTarget.remove()
  })


// letter.click(function(){
//   console.log(this, 'this')

//   cell.click(function(div){
//    console.log(div)
//   })
// })

// letter.click(function(el){
//   console.log(el, 'el')
// });
 var replenish = function(){
  var usedChips = $('.slots.newChip')
  console.log(usedChips.length)
      for ( var i=0; i < usedChips.length; i++ ) {
        $('<div class="letters">' + alphabet[i] + '</div>').attr( 'id', 'test')
        .appendTo( '#cardPile' )
      }
    }

// $('#test').on('click', '.letters', function() {
// console.log(this, 'this')
//   console.log(e,'e')
//   var test = this.innerHTML
//   console.log(test,'innerHTML')
//     $('#cell').on('click', '.slots', function() {
//     $(this).addClass('test')
//   div.toElement.innerText = test;
//     e.currentTarget.remove()
//   })

// })

var liveHand = $('#liveHand')

$(liveHand).on('click', '.letters' , function(e) {console.log(e)});


