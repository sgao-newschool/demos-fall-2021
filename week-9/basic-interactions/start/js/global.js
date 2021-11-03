window.addEventListener("load", function() {
   

    //Event
    //Event type - click
    //Event target - button
    document.getElementById('my-button').addEventListener("click", changeColorAndText);


    //Function
    //- Changing the background color of our div element
        //---get the div element
        //---change the color using css

    //- Changing the text of our button
        //---grab our button
        //---change the text on the button

    function changeColorAndText() {
        document.getElementById('box').style.backgroundColor = "lightblue";

        document.getElementById('my-button').innerHTML = "Clicked!!!!"


    }


});

