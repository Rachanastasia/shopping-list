'use strict';

function main() {

  $('form').submit(function(event) {
    event.preventDefault();


//gets input text and adds items to beginning of list

    let inputText = $(this).find('input').val();


    //google says the first psuedo selector is depreciated
    //I tried using the first child selector on the parent element,
    //and it did not work
    //what would be the current way to do this?
    $('li:first').before(`<li><span class="shopping-item">${inputText}
        </span><div class="shopping-item-controls">
        <button class="shopping-item-toggle">
        <span class="button-label">check</span>
        </button><button class="shopping-item-delete">
        <span class="button-label">delete</span>
        </button></div></li>`);
  });




//toggles class with check button
$('.shopping-list').on('click', '.shopping-item-toggle', function(){
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});




//deletes items

$('.shopping-list').on('click', 'li', function(){
    $(this).closest('li').remove();
})









}


$(main);