window.addEventListener("DOMContentLoaded", function(){
    
    
    //버거메뉴 팝업
    var burger = document.querySelector(".burger");
    burger.addEventListener("touchstart", function(){

        var popUp = document.querySelector(".pop");
        if (popUp.classList.contains("active")){
            popUp.classList.remove("active");
        }else {
            popUp.classList.add("active");
        }
        console.log(popUp.classList.contains("active"));

    });
    
    
    
    
    
    
});