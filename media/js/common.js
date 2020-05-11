$(function(){
    //start
    $.ajax({
        url : 'js/filming.json',
        type : 'GET',
        dataType : 'json',
        success :function(data){
            
            for(var i in data.event){
                var imgNode = "<li><img src=" + data.event[i] + "></li>";
                $(".gallery").append(imgNode);
            }
            
        }
    });
    
    //end
});