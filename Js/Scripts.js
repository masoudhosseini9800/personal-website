// $(".carousel").carousel({
//   interval: 5000,
//   keyboard: true,
//   pause: "hover",
//   wrap: true,
// });

$(document).ready(function () {
  $("#scroll-img").click(() => {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top,
      },
      900
    );
  });
});

