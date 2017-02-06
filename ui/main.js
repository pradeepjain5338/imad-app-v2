console.log('Loaded!');

var element=document.getElementById('main-text');

element.innerHTML = "new data";

var img = document.getElementById('img');

var a = 0;
function moveright() {
    a = a + 1;
    img.style.marginleft = a + "px";
}
img.onclick = function () {
    
//img.style.marginleft = "100px";
    var interval = setInterval(moveright, 100);
};

