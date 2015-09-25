/**
 * Created by briandaves on 9/25/15.
 */
$(function(){
    $.ajax({
        url:"/getColors"
    }).done(function(response){
        console.log(response);
        for (var i =0; i< response.length;i++){
            console.log(response[i]);
            var $content = $("<div style=color:"+ response[i].value + "><p>" +  response[i].color + "</p></div>");
            $(".placeholder").append($content);
        }

    })
});