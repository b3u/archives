//Responsive navbar
function showMenu() {
  var menu = document.querySelector('nav');
  if (menu.className === 'menu') {
    menu.className += ' responsive';
  } else {
    menu.className = 'menu';
  }
}

//jQuery
$(document).ready(function() {
    var scrollLink = $('.scroll');
    //Smooth Scrolling
    scrollLink.click(function (e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000)
    })
})
//Copyright date function
function Copyright() {
  var time = new Date();
  document.getElementById('copyright').innerHTML = '&copy; Copyright ' + time.getFullYear() + ' by Binyamin Green';
}
/*(I think this is really an event handler (onclick) problem:
		When user clicks one and doesn't click two (two is nested within one), run function to hide popup)
	When user clicks on anywhere on body,
    If className does not equal "popup responsive",
		then popupContent className subtracts '.responsive' */
