console.log('Loaded!');

var element=document.getElementById('main-text');

element.innerHTML = "new data";

var img=document.getElementById('img');

img.onclick = function(){
    img.style.marginleft='300px';
};
