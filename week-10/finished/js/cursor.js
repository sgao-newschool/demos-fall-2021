window.addEventListener("load", function() {
   var cursorPositionElement = document.getElementById("cursor-position");
   document.addEventListener('mousemove', trackCursor);

   function trackCursor(e) {
      cursorPositionElement.innerHTML = 'x: ' + e.clientX + ' ' + 'y: ' + e.clientY;
   }

});

