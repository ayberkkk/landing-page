jQuery(document).ready(function ($) {
  /* Hesaplamalar */
  var windowh = $(window).outerHeight(); // Window Yüksekliği
  var windoww = $(window).width(); // Window Genişliği
  var windowh = $(window).height(); // Window Yüksekliği
  var headerh = $("header").outerHeight(); // Header Yüksekliği
  var headerToph = $("header .top").outerHeight(); //
  var footerh = $("footer").outerHeight(); //
  var bannerh = $("#manset").outerHeight(); //

  /* Hesaplamalar End */

  ////////////////// Classlar //////////////////

  /*----- Window Height -----*/
  //Windowh clasını alan öğeler, aktif olan monitör yüksekliğini alır.

  if (jQuery(".windowh-min").hasClass("windowh-min")) {
    $(".windowh-min").css({
      height: windowh + "px",
    });
  }
  /*----- Window Height End */
  /*----- Window Height + Scroll -----*/
  $(".windowh-s").css({
    height: windowh + "px",
    "overflow-y": "auto",
  });

  /* === FooterFixed === */
  $(".footerFixed").css({
    "min-height": windowh - (headerh + footerh) + "px",
  });
  /* === FooterFixed End === */
  /* === Content Fİxed === */
  $(".contentFixed").css({
    "min-height": windowh - headerh + "px",
  });

  /* === Content Fİxed End === */

  $('.drop').hover(function () {
    var subcontenth = $('.sub-content', this).outerHeight(); //
    var toggleh = $('.toggle', this).outerHeight(); //
    $('.toggle').removeClass('active');
    $(this).find('.toggle').addClass('active');
    if (screen.width > 992) {
      $(this).find('.sub').css({
        'height': (subcontenth) + 30 + 'px',
        'top': toggleh + 'px',
      });
    } else {
      $(this).find('.sub').css({
        'height': (subcontenth) + 'px',
        'top': toggleh + 'px',
      });
    }
  }, function () {
    $(this).find('.sub').css({
      'height': '0px',
    });
    $('.toggle').removeClass('active');
  });
  /*----- Window Height + Scroll End -----*/

  /* ===== Mobil Menü Açma ===== */
  $(".menuToggle").click(function () {
    $("header .menu").addClass("ml0");
    $("#closeToggle").fadeIn();
  });
  /* ===== Mobil Menü Açma End ===== */
  /* ===== Close Toggle ===== */
  $("#closeToggle").click(function () {
    $("header .menu").removeClass("ml0");
    $("#closeToggle").hide();
  });
  /* ===== Close Toggle End ===== */
  /* ========== Scroll Fixed Settings ========== */
  function scrollt() {
    var scrollHeight = jQuery(document).scrollTop();

    // Aşağı İnerken
    if (screen.width > 992) {
      if (scrollHeight > 100) {
        $("header").addClass("sticky");
      }
    }
    if (scrollHeight > 150) {
      $("header.contentPage").addClass("sticky");
    }
    // Aşağı İnerken End
    // Yukarı Çıkarken

    if (screen.width > 992) {
      if (scrollHeight < 100) {
        $("header").removeClass("sticky");
      }
    }
    // Yukarı Çıkarken End
    if (scrollHeight == 0) {
    }
  }
  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      scrollt();
    } else {
      scrollt();
    }
    lastScrollTop = st;
  });
  /* ========== Scroll Fixed Settings End ========== */

  var overlay = document.getElementById("overlay");

  window.addEventListener('load', function(){
    overlay.style.display = 'none';
  })

  var btn = $("#topButton");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "300"
    );
  });
});
/*---------- Sayfa yeniden boyutlandırma durumunda çalışacak scriptler ----------*/
jQuery(window).resize(function () { });
/*---------- Sayfa yeniden boyutlandırma durumunda çalışacak scriptler End ----------*/


