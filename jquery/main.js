$(document).ready(function(){
  $(".about-me").slideDown(800);
  $(".hobby").slideDown(1000);
  $("#a1").css("color","lightsteelblue");

  $(".skill").click(function(){
    $(".about-me").hide();
    $(".hobby").hide();
    $(".contact-info").hide(250);
    $(".skill-project").slideDown(700);

    $("#a2").css("color","lightsteelblue");
    $("#a1").css("color","white");
    $("#a3").css("color","white");
  });

  $(".intro").click(function(){
    $(".contact-info").hide();
    $(".skill-project").hide();
    $(".about-me").slideDown(800);
    $(".hobby").slideDown(1000);
    
    $("#a1").css("color","lightsteelblue");
    $("#a2").css("color","white");
    $("#a3").css("color","white");
  });
  $(".contact").click(function(){
    $(".about-me").hide();
    $(".hobby").hide();
    $(".skill-project").hide();
    $(".contact-info").slideDown(800);

    $("#a3").css("color","lightsteelblue");
    $("#a1").css("color","white");
    $("#a2").css("color","white");
  });

  });