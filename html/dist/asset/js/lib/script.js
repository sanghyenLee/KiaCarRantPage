const swiper = new Swiper(".swiper-container", {
  //   direction: "horizontal",
  //   loop: true,
  //   autoplay: {
  //     delay: 3000,
  //   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
$(document).ready(function () {
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });

  //   $(".tab-box .top img").click
});
