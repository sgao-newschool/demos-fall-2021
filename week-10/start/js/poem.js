window.addEventListener("load", function() {
   //event
   //--- "keydown" event

   //function
   //--- type one word of our poem each time a key is pressed
      //---separate our poem into each individual word

      //figure out the current (or starting) word's index
      //write the current word 

      //figure out the next word's index by adding 1 to our current word's index
      //then write that word
   var poemArray = [
      "on", 
      "the", 
      "windowpanes", 
      "on", 
      "the", 
      "porcupine's", 
      "skin", 
      "on", 
      "the", 
      "curtains", 
      "on", 
      "braids", 
      "on", 
      "the", 
      "plates", 
      "in", 
      "restaurants", 
      "and", 
      "the", 
      "hats", 
      "buttons", 
      "rings", 
      "I", 
      "wrote", 
      "this", 
      "poem", 
      "In", 
      "the", 
      "night"
   ] 

   var currentIndex = 0;
   var currentWord = poemArray[currentIndex];

   document.addEventListener('keydown', writeWord)

   function writeWord(event) {

      document.getElementById("poem").innerHTML = currentWord;

      findNextWord();
   }

   function findNextWord() {
      if(currentIndex === poemArray.length - 1) {
         currentIndex = 0;
         currentWord = poemArray[currentIndex];
      } else {
         var nextIndex = currentIndex + 1;
         currentWord = poemArray[nextIndex];
         currentIndex = nextIndex;
      }
   }  
});

