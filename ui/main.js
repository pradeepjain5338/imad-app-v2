var button =document.getElementById("counter");


button.onclick= function() {
    
    var request = new XMLHttpRequest() ;
    
    request.onreadystatechange = function() {
        
        if(request.readyState === XMLHttpRequest.DONE)
{
    if(request.status === 200)
    {
        var counter = request.responseText ;
        var span = document.getElementById("count") ;
        span.innerHTML = counter.toString();   
    }
}        
        
    };
    
  request.open('GET','http://pradeepjain5338.imad.hasura-app.io/counter',true)  ;
  request.send(null);
    
};
var nameinput= document.getElementById("name");
var names = nameinput.value;
var submit =document.getElementById("submit");
submit.onclick =function() {
    var name = ["name1","name2","name3"];
    var list='';
    for(var i=0;i<name.length;i++)
    {
        list+='<li>' + name[i] + '<li>' ;
    }
    var ul =document.getElementById("namelist");
    ul.innerHTML = list;
};
    