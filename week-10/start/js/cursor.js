window.addEventListener("load", function() {
    var paragraph = document.getElementById('cursor-position');

    document.addEventListener('mousemove', writeText)

    function writeText(evt) {
        paragraph.innerHTML = 'x: ' + evt.pageX + ' ' + 'y: ' + evt.pageY
    }
});

