
$(document).keypress(function(event){
  $("h1").text(event.key);
});

$("button").click(function(){
  $("h1").css("color","purple");
});
