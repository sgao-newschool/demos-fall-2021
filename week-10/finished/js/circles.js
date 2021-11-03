window.addEventListener("load", function() {
   colorCircles()

   function colorCircles() {
      var circles = document.getElementsByClassName('circle');

      for (let i = 0; i < circles.length; i++) {
         if(i % 2 === 0) {
            circles[i].style.backgroundColor = 'blue'
         }
      }
   }

});

