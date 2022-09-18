// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const text = document.getElementById("text");
const stat = document.getElementById("stat");

// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.

var wordCount = 0;
var charCount = 0;
text.addEventListener('input', function(){

  if(text.value == false)
  {
    wordCount = 0;
    charCount = 0;
  }
  else
  {
    wordCount = text.value.trim().replace(/\s+/g, ' ').split(' ').length;
    charCount = text.value.split('').length;
  }
  stat.innerHTML = `You've written ${wordCount} words and ${charCount} characters.`;

});