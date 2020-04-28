window.addEventListener("DOMContentLoaded", function(){
    
    
    
    //뉴스슬라이드
    function newsSlide(){
        var idx = 0;
        var nList = document.querySelector(".news_list ul");
        var clone = nList.firstElementChild.cloneNode(true);
        nList.appendChild(clone);
        
        setInterval(function(){
            nList.style.transition = ".5s";
            nList.style.transform = "translateY(-"+19*(idx+1)+"px)";
            
            idx++;  
            
            if(idx === 5){
                
                setTimeout(function(){
                    nList.style.transition = "0s";
                    nList.style.transform = "translateY(0px)";
                },501);
                idx = 0;
            };
        },3000);
    }newsSlide();
    
    
    
    
    
    //영화포스터슬라이드
    function movieSlide(){
        var slide = document.querySelector(".slide");
        var ul = document.querySelector(".slide ul");
        var slideW = ul.clientWidth;
        var clone = ul.cloneNode(true);
        var i = 0
        ul.append(clone);
        
        
        setInterval(function(){
            slideW != i ? i++ : i = 0;
            ul.style.marginLeft = -i + "px";
        },30);
    }movieSlide();

    var idx = 0;
    var ul = document.querySelector(".visual_list ul");
    var li = ul.querySelectorAll("li");
    var number = document.querySelector(".indi .number");

    
    
    
    //비주얼슬라이드
    
    function slideEvent(i) {
        for (var m = 0; m < li.length; m++) {
            
            li[m].style.width = "0%";
        }

        setTimeout(function() {
            li[i].style.opacity = "1";
            li[i].style.width = "100%";
            number.textContent = (i+1);
        },700);
     }
    
    
    function visualSlide(){

        console.log(number);
        setInterval(function(){

            idx++;
            if(idx === 3){
                idx = 0;
            };

            slideEvent(idx);

         },6000);
        
        arrow();
        
    }
    visualSlide();
        
    function arrow(){
        var pager = document.querySelectorAll(".indi a");
        
        pager[0].addEventListener("click", function(){
            if (idx === 0) {
                idx = (li.length - 1);
            } else {
                idx -= 1;
            }
            slideEvent(idx);
        });
        
        pager[1].addEventListener("click", function(){
            if (idx === (li.length - 1)) {
                idx = 0;
            } else {
                idx += 1;
            }
            slideEvent(idx);
        })
    };
    
    
    
    
    
    
    //비주얼인디게이터
    /*위*/
    var upArrow = document.querySelector(".up_arrow");
    upArrow.addEventListener("mouseover", function(){

        upArrow.src = "img/icon/uparrowH.png";
        upArrow.addEventListener("mouseout", function(){
            upArrow.src = "img/icon/uparrow.png";
        });
        
    });
    /*아래*/
    var downArrow = document.querySelector(".down_arrow");
    downArrow.addEventListener("mouseover", function(){
        
        downArrow.src = "img/icon/downarrowH.png";
        downArrow.addEventListener("mouseout", function(){
            downArrow.src = "img/icon/downarrow.png";
        });
    });
    
    
    
});