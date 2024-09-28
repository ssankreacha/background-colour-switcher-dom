var body = document.querySelector("body");
var colourButton = document.querySelector("#colorButton");
var colourText = document.querySelector("#colorDisplay")

colourButton.addEventListener("click", function randomColour(){
    // rgb format (0, 0, 0) randomised numers
    var x = Math. floor(Math. random() * 256); 
    var y = Math. floor(Math. random() * 256);
    var z = Math. floor(Math. random() * 256);

    // Random background colour value
    var bgColour = "RGB(" + x + "," + y + "," + z + ")";

    // Random background colour
    body.style.backgroundColor=bgColour

    // Change background colour name
    colourText.innerHTML = "Background Colour:"+ bgColour;

});

