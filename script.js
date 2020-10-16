var slideIndex = 0;
var check = 1;
var timer;

function plusSlides(n) {
  showSlides();
  check = n;
  stopShow();
}
function startShow(){
timer = setTimeout("showSlides()", 3000);
}
function stopShow() {
clearTimeout(timer);
}
function showSlides() {
  var i;
  var newPattern=0;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  if(check === 1)
  {slideIndex++;newPattern=1;}
  else
  slideIndex--;
  if (slideIndex > slides.length) {slideIndex = 1}    
  if (slideIndex < 1) {slideIndex = slides.length}
  slides[slideIndex-1].style.display = "block";
  startShow();
}
$(document).ready(function(){
  showSlides();
  $(".slideshow-container").mouseover(function(){
    stopShow();
    $(".prev").css("opacity", 1);
    $(".next").css("opacity", 1);
    $(".prev").css({"padding-left": '16px'});
    $(".next").css({"padding-right": '16px'});
  });
  $(".slideshow-container").mouseout(function(){
    startShow();
    $(".prev").css({padding: '0px'});
    $(".next").css({padding: '0px'});
    $(".prev").css("opacity", 0);
    $(".next").css("opacity", 0);
  });
});