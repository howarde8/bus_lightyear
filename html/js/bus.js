var dep_template="<div class='choice' id='dep_choice'>{{dep_place}}</div>";
var data_url="https://bus-lightyear.herokuapp.com/homepage-info";
var tododata;
$.ajax({
  url: data_url,
  success: function(res){
    console.log(JSON.parse(res));
  }
});

// Search Bar hover 動畫


$(".destination").click(
  function(){
    $(".destination").css("width","40%");
    $(".departure").css("width","18%");
    $(".date").css("width","18%");
    $(".number").css("width","18%");
    $(".destination>.show").css("height","200px");
  }
);

$(".departure").click(
  function(){
    $(".destination").css("width","18%");
    $(".departure").css("width","40%");
    $(".date").css("width","18%");
    $(".number").css("width","18%");
    $(".departure>.show").css("height","200px");
  }
);

$(".date").click(
  function(){
    $(".destination").css("width","18%");
    $(".departure").css("width","18%");
    $(".date").css("width","40%");
    $(".number").css("width","18%");
    $("input").click();
  }
);

$(".number").click(
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
    $(".show").css("height","0px");
  }
);

// 日期 日期 日期 日期 日期 日期 日期 日期


//  選擇出發地、目的地

$(".choice1").click(
  function(){
    $(".text_des").text($(this).text());
  }
);

$(".choice2").click(
  function(){
    $(".text_dep").text($(this).text());
  }
);



//  登入 登入 登入 登入 登入 登入 登入 登入 登入 登入 登入

$(".login").click(
  function(){
    $(".login_cover_off").addClass("cover_on");
  }
);

$(".login_cover").click(
  function(){
    $(".login_cover_off").removeClass("cover_on");
  }
);

$(".close_window").click(
  function(){
    $(".login_cover_off").removeClass("cover_on");
    $(".signup_cover_off").removeClass("cover_on");
  }
);

$(".change_to_signup").click(
  function(){
    $(".login_cover_off").removeClass("cover_on");
    $(".signup_cover_off").addClass("cover_on");
  }
);

// 註冊 註冊 註冊 註冊 註冊 註冊 註冊 註冊 註冊 註冊 註冊 



$(".signup_cover").click(
  function(){
    $(".signup_cover_off").removeClass("cover_on");
  }
);

$(".change_to_login").click(
  function(){
    $(".signup_cover_off").removeClass("cover_on");
    $(".login_cover_off").addClass("cover_on");
  }
);