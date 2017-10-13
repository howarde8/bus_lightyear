$(".destination").mouseenter(
  function(){
    $(".destination").css("width","40%");
    $(".departure").css("width","18%");
    $(".date").css("width","18%");
    $(".number").css("width","18%");
  }
);

$(".departure").mouseenter(
  function(){
    $(".destination").css("width","18%");
    $(".departure").css("width","40%");
    $(".date").css("width","18%");
    $(".number").css("width","18%");
  }
);

$(".date").mouseenter(
  function(){
    $(".destination").css("width","18%");
    $(".departure").css("width","18%");
    $(".date").css("width","40%");
    $(".number").css("width","18%");
  }
);

$(".number").mouseenter(
  function(){
    $(".destination").css("width","18%");
    $(".departure").css("width","18%");
    $(".date").css("width","18%");
    $(".number").css("width","40%");
  }
);

$(".search").mouseleave(
  function(){
    $(".destination").css("width","24%");
    $(".departure").css("width","24%");
    $(".date").css("width","24%");
    $(".number").css("width","24%");
  }
);

var pic=0;
$(".slideshow").click(function(){
  
  pic+=1;
  if(pic>8){
    pic=0;
  }
  $(".image").css("top","-"+pic*100+"%");
  
});

var pic=0;
setInterval(function(){
  pic+=1;
  if(pic>8){
    pic=0;
  }
  $(".image").css("top","-"+pic*100+"%");
  
},5000);