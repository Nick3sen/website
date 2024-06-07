var img_array = ['Media/Technicaldrawing-pully.png', 'Media/Technicaldrawing-wheenbracket.png', 'Media/technicaldrawing-rowwingbracket.png', 'Media/technicaldrawing-touw guider.png'];
var title_array = ['Pully', 'Wheelbracket', 'Rowwingbracket', 'Touw guider']
var para_array = [
    'Voor de pully gebruikten we één algemeen ontwerp, dit werdt gebruikt voor de aandrijving aan de hand van rubbere bandjes. Dit ontwerp werdt gemaakt in solidworks en uitgewerkt met een 3D printer.',
    'Deze bracket wordt gebruikt om het wiel, dat het zeil op en neer haalt, op zijn plek te houden. Dit ontwerp werdt gemaakt in solidworks en uitgewerjt met een 3D printer.',
    'Deze bracket is om de individuele onderdelen van het roeimechanisme op te monteren. Dit werdt gerealiseerd met een 3D printer.',
    'Dit onderdeel wordt op de mast gemonteerd om de touwen van het zeil in de juiste richting te guiden. Dit onderdeel werdt gerealiseerd met een 3D printer.']
var i = 0;

// next function
function nextFunction() {
    if( i < title_array.length - 1) i++;
    var element = document.getElementById("myTitle");
    element.innerHTML = title_array[i];

    var element = document.getElementById("myPara");
    element.innerHTML = para_array[i];

    document.getElementById("myImg").src = img_array[i];
    
    document.getElementById("testvar").innerHTML = i;

}

// previous function
function prevFunction() {
    if(i > 0) i--;

    var element = document.getElementById("myTitle");
    element.innerHTML = title_array[i];

    var element = document.getElementById("myPara");
    element.innerHTML = para_array[i];

    document.getElementById("myImg").src = img_array[i];
    
    document.getElementById("testvar").innerHTML = i;
}


// sticky navbar
// var nav = new SlideNav({
// 	activeClass: "active",
// 	toggleButtonSelector: '.hamburger',
// 	toggleBoxSelector: '.nav',
// 	hideAfterSelect: false,
// 	speed: 100  //default 250
// });