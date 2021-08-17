//JavaScript doc
var compteurImage = 1;
var totalimage = 15;



function slider(x) {

    var image = document.querySelector('img');
    compteurImage = compteurImage + x;
    image.src = "images/img" + compteurImage + ".jpg";
    if (compteurImages >= totalimage) {

        compteurImage = 1;

    }
    if (compteurImages < 1) {
        compteurImage = totalimage;

    }

}

function sliderAuto() {

    var image = document.getElementById('img');
    compteurImage = compteurImage + 1;
    image.src = "images/img" + compteurImage + ".jpg";
    if (compteurImages >= totalimage) {

        compteurImage = 1;

    }
    if (compteurImages < 1) {
        compteurImage = totalimage;

    }

}
window.setInterval(sliderAuto, 3000);

const popup = document.querySelector('.popup');
//varriable pour le click retour ou fermeture
const close = document.querySelector('.close');
window.onload = function() {
        setTimeout(function() {
            popup.style.display = 'block';
            //temps d'appirition du popup
        }, 2000)
    }
    //fonction cliquer fermer
close.addEventListener('click', () => {
    popup.style.display = "none";
})