window.addEventListener("DOMContentLoaded", function(){
    
    
    window.addEventListener("scroll", function(e){
        var section = document.querySelectorAll(".right_area section");
        var winH = (window.innerHeight)-500;
        var sTop = window.scrollY;
        
        for(var i=0; i<section.length; i++){
            if(sTop >= (section[i].offsetTop)-winH){
                section[i].classList.add("active");
            };
        }; 
        
   
    });
    
    var event = new CustomEvent("scroll");
    window.dispatchEvent(event);
    
    
});