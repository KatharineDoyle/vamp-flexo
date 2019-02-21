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
