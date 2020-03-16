var counterImages=1;

function addImage() {
    var image = document.createElement("img")
    image.src = "https://placeimg.com/250/150/" + counterImages;

    var list = document.getElementById("imagesList")
    list.appendChild(image);

    var counter = document.getElementById("imageCounter");
    counter.innerText = counterImages.toString();

    counterImages ++;

}