var img_array = ['Media/Technicaldrawing-pully.png', 'Media/background.jpg', 'http://placehold.it/100x100/red'];
var title_array = ['Pully', 'frame', 'mast']
var para_array = ['Voor de pully gebruikten we één algemeen ontwerp, dit werdt gebruikt voor de aandrijving aan de hand van rubbere bandjes.', 'kaasrand', 'is']
i = 0;

function nextFunction() {
    i++;
    var element = document.getElementById("myTitle");
    element.innerHTML = title_array[i];

    var element = document.getElementById("myPara");
    element.innerHTML = para_array[i];

    document.getElementById("myImg").src = img_array[i];
    if (i == img_array.length - 1) {
        i = -1;

    }

}

function prevFunction() {
    i--;
    var element = document.getElementById("myTitle");
    element.innerHTML = title_array[i];

    var element = document.getElementById("myPara");
    element.innerHTML = para_array[i];

    document.getElementById("myImg").src = img_array[i];
    if (i == img_array.length - 1) {
        i = -1;

    }

}