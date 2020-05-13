window.addEventListener("DOMContentLoaded", function(){
    
    
    var figure = document.querySelectorAll(".container figure > p");
    var black = document.querySelector(".black");
    var contents = black.firstElementChild;
    
    for(var i=0; i<figure.length; i++){
        figure[i].addEventListener("click", function(){
            contents.innerHTML = "";
            black.classList.add("active");
            $.ajax({
                url : "js/sub3/antarctic_journal.json",
                type : 'GET',
                dataType : 'json',
                success :function(data){
                    var html = "";
                    html += "<p><img src='" + data.image_main + "' alt=''></p>"
                    html += "<div class='movie_text'>"
                    var movieText = data.movie_text;
                    html += "<h3>" + movieText.title_ko + "</h3>"
                    html += "<small>" + movieText.title_en + "</small>"
                    html += "<dl>"
                    html += "<dt>개요</dt><dd>" + movieText.information + "</dd>"
                    html += "<dt>등급</dt><dd>" + movieText.grade + "</dd>"
                    html += "<dt>누적관객</dt><dd>" + movieText.views + "</dd>"
                    html += "<dt>주요정보</dt><dd>" + movieText.remark + "</dd>"
                    html += "</dl>"
                    html += "</div>"
                    html += "<div class='trailer'>"
                    html += "<h4>TRAILER</h4>"
                    html += "<ul>"
                    var trailers = data.trailer;
                    for (var i = 0; i < trailers.length; i++) {
                        var trailer = trailers[i];
                        html += "<li>"
                        html += "<a href='" + trailer.link + "'><img src='" + trailer.image + "' alt=''></a>"
                        html += "<p>" + trailer.text + "</p>"
                        html += "</li>"
                    }
                    html += "</ul>"
                    html += "</div>"
                    html += "<a class='x' href='javascript:void(0)'><img src='img/icon/x.png' alt=''></a>"
                    contents.innerHTML = html;
                    $(".x").click(function () {
                        black.classList.remove("active");
                    })
                }
            });
        });
    }
});