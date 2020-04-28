window.addEventListener("DOMContentLoaded", function(){
    
    
    var figure = document.querySelectorAll(".container figure > p");
    var black = document.querySelector(".black");
    
    for(var i=0; i<figure.length; i++){
        figure[i].addEventListener("click", function(){
            black.classList.add("active");
        });
    };
    
    var x = document.querySelector(".pop .x");
    
    x.addEventListener("click", function(){
        black.classList.remove("active");
    });
    
    
    
});