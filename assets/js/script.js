$(function(){
  $("#green").click(function(){
    $("#text").css("color","green");
  });
  $("#red").click(function(){
    $("#text").css("color","red");
  });
  $("#blue").click(function(){
    $("#text").css("color","blue");
  });
});

 /* 2ème méthode à revoir
$(function(){
  $(".color").click(function(){
    divColor = $(this).attr('id');
    $("#text").css('color', divColor);
  });
});
*/
