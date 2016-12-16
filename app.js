/* Un p'tit programme bien rigolo de @phreddb */

var json;
var audio;


$.getJSON("./content/content.json", function(data){ 
    
    json = data;
    html = "";

    for(var i in json)
    {
        console.log(json[i]);
        html += '<div class="soundkey" id="'+i+'">';
            html += '<div class="image" style="background-image:url(./content/images/'+json[i].image+');"></div>';
            html += '<div class="title">'+json[i].title+'</div>';
            html += '<div class="key">'+json[i].key+'</div>';
        html += '</div>';
    }

    $("#container").html(html);

})

function soundKey(i){

    console.log("Playing sound... "+i);
    audio = new Audio('./content/sounds/'+json[i].sound);
    audio.play();
    
}

$(document).ready(function(){

    $("body").keydown(function(e) {
        for(var i in json)
        {
            if(e.keyCode == json[i].keycode){
                soundKey(i);
            }
        }
    });

     $(".soundkey").click(function(){
        soundKey(this.id);
    });

   

})

