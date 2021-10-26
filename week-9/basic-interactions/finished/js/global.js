window.addEventListener("load", function() {
    //create a box element and a button element

    //event
    //listen to a click event on the button
    //- get the button element
    //- add a event listener
    //- tell the event listener what to do (function)

    //function
    //when click event on button happens, turn the box blue
    //- get the box element
    //- change the background color of the box using the style property


    function makeBoxBlue() {
        document.getElementById("box").style.backgroundColor = "lightblue";

        document.getElementById("button").innerText = "clicked";
    }
    
    document.getElementById("button").addEventListener("click", makeBoxBlue);
});

