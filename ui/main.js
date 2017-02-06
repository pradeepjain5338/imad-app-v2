console.log('Loaded!');

var element=document.getElementById('main-text');

element.innerHTML = "new data";

var img = document.getElementById('img');

var marginLeft = 0;
function moveright() {
    marginLeft = marginLeft + 10;
    img.style.marginleft = marginLeft + 'px';
}
img.onclick = function () {
    
//img.style.marginleft = "100px";
    var interval = setinterval(moveright , 300);
};

