//Hover Effect//
$(document).ready(function () {
  $(".p1").hide(100);
  $(".pic1").click(function () {
      $(".pic1").hide(100);
      $(".p1").show(100);
  })
  $(".p1").click(function () {
      $(".p1").hide(100);
      $(".pic1").show(100);
  });
});

$(document).ready(function () {
  $(".p2").hide(100);
  $(".pic2").click(function () {
      $(".pic2").hide(100);
      $(".p2").show(100);
  })
  $(".p2").click(function () {
      $(".p2").hide(100);
      $(".pic2").show(100);
  });
});

$(document).ready(function () {
  $(".p3").hide(100);
  $(".pic3").click(function () {
      $(".pic3").hide(100);
      $(".p3").show(100);
  })
  $(".p3").click(function () {
      $(".p3").hide(100);
      $(".pic3").show(100);
  });
});

//Porfolio Hover//
$(document).ready(function(){
  $("#work1").mouseover(function(){
    $("#overlap").show();
  }).mouseout(function(){
    $("#overlap").hide();
  });
});
$(document).ready(function(){
  $("#work2").mouseover(function(){
    $("#overlap2").show();
  }).mouseout(function(){
    $("#overlap2").hide();
  });
});
$(document).ready(function(){
  $("#work3").mouseover(function(){
    $("#overlap3").show();
  }).mouseout(function(){
    $("#overlap3").hide();
  });
});
$(document).ready(function(){
  $("#work4").mouseover(function(){
    $("#overlap4").show();
  }).mouseout(function(){
    $("#overlap4").hide();
  });
});

$(document).ready(function(){
  $("#work5").mouseover(function(){
    $("#overlap5").show();
  }).mouseout(function(){
    $("#overlap5").hide();
  });
  $("#work6").mouseover(function(){
    $("#overlap6").show();
  }).mouseout(function(){
    $("#overlap6").hide();
  });
  $("#work7").mouseover(function(){
    $("#overlap7").show();
  }).mouseout(function(){
    $("#overlap7").hide();
  });
  $("#work8").mouseover(function(){
    $("#overlap8").show();
  }).mouseout(function(){
    $("#overlap8").hide();
  });
});
// Feedback to the customer//
$("button").click(function (review) {
  var customer = document.getElementById('nameDetail').value;
  alert(' Dear ' + ' esteemed ' + customer + ' we have sucessfully received your message. ' + 'Feel free to reach out to us anytime.');
  review.preventDefault();
});
//Reset my form button//
$("button").on('click', function () {
  $('form').each(function () {
    this.reset();
  });
});