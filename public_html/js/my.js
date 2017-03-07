
/*
 * £ukasz Witaszek
 * Copyright 2017 web.witaszki.pl
 */



// Instantiate the Bootstrap carousel
// http://jsfiddle.net/paulalexandru/at606jpe/

$('#myCarousel').carousel({
  interval: 10000
})

$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  }
  else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});