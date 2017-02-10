var button =document.getElementById("counter");


button.onclick= function() {
    
    var request = new XMLhttpRequest() ;
    
    request.onreadystatechange = function() {
        
        if(request.readystate === XMLhttprequest.DONE)
{
    if(request.status === 200)
    {
        var counter= request.responseText;
     counter =counter + 1;
    var span =document.getElementById("count");
    span.innerHTML=counter.toString();   
    }
}        
        
    };
    
  request.open('GET','http://http://pradeepjain5338.imad.hasura-app.io/counter',true)  ;
  request.send(null);
    
    
    
};