window.addEventListener("load", function() {

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

   var poemContainer = document.getElementById('poem');
   var currentWordIndex = 0;
   
   document.body.addEventListener('keydown', typePoem);

   function typePoem() {
      if(currentWordIndex === poemArray.length - 1) return;
      
      var nextWord = poemArray[Math.floor(Math.random() * (poemArray.length - 1))];
     
      currentWordIndex++;

      typeWord(nextWord)
   }

   function typeWord(word) {
      poemContainer.innerHTML = word;
   }
});

