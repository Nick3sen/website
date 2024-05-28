var img_array = ['Media/Technicaldrawing-pully.png', 'Media/Technicaldrawing-wheenbracket.png', 'Media/test.jpg'];
var title_array = ['Pully', 'Wheelbracket', 'test']
var para_array = [
    'Voor de pully gebruikten we één algemeen ontwerp, dit werdt gebruikt voor de aandrijving aan de hand van rubbere bandjes. Dit ontwerp werdt gemaakt in solidworks en uitgewerkt met een 3D printer.',
    'Deze bracket wordt gebruikt om het wiel, dat het zeil op en neer haalt, op zijn plek te houden. Dit ontwerp werdt gemaakt in solidworks en uitgewerjt met een 3D printer.',
    'is']
i = 0;

function nextFunction() {
    i++;
    var element = document.getElementById("myTitle");
    element.innerHTML = title_array[i];

    var element = document.getElementById("myPara");
    element.innerHTML = para_array[i];

    document.getElementById("testvar").innerHTML = i;

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
    if (i < 0) {
        i = 1;

    }

}

document.getElementById("testvar").innerHTML = i;

// sticky navbar
// var nav = new SlideNav({
// 	activeClass: "active",
// 	toggleButtonSelector: '.hamburger',
// 	toggleBoxSelector: '.nav',
// 	hideAfterSelect: false,
// 	speed: 100  //default 250
// });