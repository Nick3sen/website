var img_array = ['Media/Boot.jpg', 'Media/background.jpg', 'http://placehold.it/100x100/red'];
var title_array = ['Pully', 'frame', 'mast']
i = 0;

function myFunction() {
    i++;
    var element = document.getElementById("myTitle");
    element.innerHTML = title_array[i];
    document.getElementById("myImg").src = img_array[i];
    if (i == img_array.length - 1) {
        i = -1;

    }
    // document.getElementById("myTitle").src = title_array[i];
    // if (i == title_array.length - 1) {
    //     i = -1;
    // }
}