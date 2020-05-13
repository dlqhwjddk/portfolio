window.addEventListener("DOMContentLoaded", function(){
    

/*$(function (){*/
    
    
    var param = location.href.split('=')[1] || "0";
    console.log(param);
    var jsonUrl = ['js/sub2/filming.json','js/sub2/academy.json','js/sub2/friend.json'];
    
    var li = document.querySelectorAll(".category li a");
    var category = ['Filming Site','The Oscars 2020','Colleagues of His'];

    function select(param){
        var gallery = $(".gallery");
        gallery.html("");
        $.ajax({
            url : jsonUrl[param],
            type : 'GET',
            dataType : 'json',
            success :function(data){

                for(var i in data.event){
                    var imgNode = "<li><img src=" + data.event[i] + "></li>";
                    gallery.append(imgNode);
                }

            }
        });

    }
    select(param);
    
    li[param].classList.add("active");
    
    for(let i=0; i<li.length; i++){
        li[i].addEventListener("click", function(){

            for(var j=0; j<li.length; j++){
                li[j].classList.remove("active");
            }

            this.classList.add("active");
            select(i);
        });
    }
     
    
/*});*/
});    

    
    
    