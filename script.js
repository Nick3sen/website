var img_array = ['Boot.jpg', 'background.jpg', 'http://placehold.it/100x100/red'];
i = 0;

function myFunction() {
    i++;
    document.getElementById("myImg").src = img_array[i];
    if (i == img_array.length - 1) {
        i = -1;

    }

}