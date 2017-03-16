/*var button =document.getElementById("counter");


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

//submit username/password to login

var submit =document.getElementById("sub_bttn");
submit.onclick =function() {
    var request = new XMLHttpRequest() ;
    
    request.onreadystatechange = function() {
        
        if(request.readyState === XMLHttpRequest.DONE)
{
    if(request.status === 200)
    {
        var name = request.responseText;
        name=JSON.parse(name);
    var list1='';
    for(var i=0;i<name.length;i++)
    {
        list1 += '<li>'+name[i]+'</li>' ;
    }
    var ul =document.getElementById("namelist");
    ul.innerHTML = list1;
    }
}        
        
    } ;
 
 /*   var names = nameinput.value;
;*/

//submit username/password to login

var submit =document.getElementById("sub_bttn");
submit.onclick =function() {
    var request = new XMLHttpRequest() ;
    
    request.onreadystatechange = function() {
        
        if(request.readyState === XMLHttpRequest.DONE)
{
    if(request.status === 200)
    {
     alert('login success');
    
    }
    else if(request.status === 403){
       alert('credential invalid'); 
    }
    else if(request.status === 500){
       alert('something went wrong on the server'); 
    }
}        
        
    } ;
 
var username =document.getElementById('username').value;
var password =document.getElementById('password').value;
console.log(username);
console.log(password);
  request.open('POST','http://pradeepjain5338.imad.hasura-app.io/login',true)  ;
  request.setRequestHeader('Content-Type','application/json');
  request.send(JSON.strigify({username : username,password : password}));
    

    
};
    