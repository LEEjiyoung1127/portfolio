$(document).ready(function(){
    $('.gnb > li').hover(function(){
        $(this).find('.depth2').stop().slideToggle();
    });

   $('.prt_left dl').hide();
   $('.prt_left').mouseover(function(){
     $(this).find("dl").show();
   });
   $('.prt_left').mouseleave(function(){
    $(this).find("dl").hide();
  });

  $('.prt_top dl').hide();
  $('.prt_top li').mouseover(function(){
    $(this).find("dl").show();
  });
  $('.prt_top li').mouseleave(function(){
    $(this).find("dl").hide();
  });
  
  $('.prt_bottom dl').hide();
  $('.prt_bottom li').mouseover(function(){
    $(this).find("dl").show();
  });
  $('.prt_bottom li').mouseleave(function(){
    $(this).find("dl").hide();
  });
  
  

  
  
   
});