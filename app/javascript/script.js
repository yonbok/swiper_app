let title ="javascriptが使えた";
alert(title);

$(document).ready(function () {
  $(".jquery").on("click", function(){
    $(this).css("color","red");
  });
});