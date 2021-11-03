window.addEventListener("load", function() {
   var circles = document.getElementsByClassName('circle');


   for(var index = 0; index < circles.length; index++) {
        var circleItem = circles[index];

        if(index % 2 === 0) {
            circleItem.style.backgroundColor = 'blue';
        }

        console.log(index % 2) //the remainder of index / 2
        
   }

});

