// First attempt creating dropdown

// document.getElementById('icecream-dropdown').addEventListener('mouseover',function(){
// //looping over all the children of dropdown
//   for (var i = 0; i < this.children.length ; i++){
//     //checking if one of children is dropdown-selection
//     if (this.children[i].classList.contains('dropdown-selection')){
//         //only then add the inline style
//         this.children[i].style.visibility = 'visible';
//         }
//   }
// });

// Way to maximise performance

var activeDropdown = {};
document.getElementById('icecream-dropdown').addEventListener('click',function(){
  for (var i = 0;i<this.children.length;i++){
    if (this.children[i].classList.contains('dropdown-selection')){
        // saving data to object, can recall easily
        activeDropdown.id = this.id;
        activeDropdown.element = this.children[i];
        this.children[i].style.visibility = 'visible';
        }
  }
});


window.onclick = function(event){
  if (!event.target.classList.contains('dropdown-button')){
    activeDropdown.element.style.visibility = 'hidden';
  }
}

////// Image carousel

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
