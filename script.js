// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the upload prompt and file input
var uploadPrompt = document.getElementById("uploadPrompt");
var fileInput = document.getElementById("fileInput");

// Get the image container to display uploaded images
var imageContainer = document.getElementById("imageContainer");

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// When the user clicks on the upload prompt, trigger the file input
uploadPrompt.onclick = function () {
    fileInput.click();
};

// When a file is selected, display it in the image container
fileInput.onchange = function (event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var img = document.createElement("img");
            img.src = e.target.result;
            img.style.maxWidth = "100%";
            img.style.marginTop = "20px";
            imageContainer.innerHTML = ""; // Clear previous image
            imageContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
};