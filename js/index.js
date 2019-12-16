/* =========================================
                Preloader
============================================ */
$(window).on("load", function() {
  // makes sure that whole site is loaded
  $("#status").fadeOut();
  $("#preloader")
    .delay(350)
    .fadeOut("slow");
});

/*==========================================
              Map
============================================ */
// function initMap() {
//   var pict = { lat: 18.4575421, lng: 73.8486396 };
//   var map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 15,
//     center: pict
//   });
//   var marker = new google.maps.Marker({
//     position: pict,
//     map: map
//   });
// }

/* =========================================
              Google Map
============================================ */
$(window).on("load", function() {
  // Map Variables
  var addressString =
    "Trade Guru Classes, H-205, Tanish Srushti, Alandi, Pune, India 412105 ";
  var myLatlng = {
    lat: 18.6715126,
    lng: 73.9055019
  };

  // 1. Render Map
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: myLatlng
  });

  // 2. Add Marker
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "Click To See Address"
  });

  // 3. Add Info Window
  var infowindow = new google.maps.InfoWindow({
    content: addressString
  });

  // Show info window when user clicks marker
  marker.addListener("click", function() {
    infowindow.open(map, marker);
  });

  // 4. Resize Function
  google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
});

/* =========================================
              Navigation
============================================ */

/* Show & Hide White Navigation */
$(function() {
  // show/hide nav on page load
  showHideNav();

  $(window).scroll(function() {
    // show/hide nav on window's scroll
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      // Show white nav
      $("nav").addClass("white-nav-top");

      // Show dark logo
      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

      // Show back to top button
      $("#back-to-top").fadeIn();
    } else {
      // Hide white nav
      $("nav").removeClass("white-nav-top");

      // Show logo
      $(".navbar-brand img").attr("src", "img/logo/logo.png");

      // Hide back to top button
      $("#back-to-top").fadeOut();
    }
  }
});

// Smooth Scrolling
$(function() {
  $("a.smooth-scroll").click(function(event) {
    event.preventDefault();

    // get section id like #about, #servcies, #work, #team and etc.
    var section_id = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section_id).offset().top - 64
      },
      1250,
      "easeInOutExpo"
    );
  });
});
/* =========================================
                Mobile Menu
  ============================================ */
$(function() {
  // Show mobile nav
  $("#mobile-nav-open-btn").click(function() {
    $("#mobile-nav").css("height", "100%");
  });

  // Hide mobile nav
  $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
    $("#mobile-nav").css("height", "0%");
  });
});

/* =========================================
                stats
============================================ */
$(function() {
  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });
});

/* =========================================
                Animation
============================================ */
// animate on scroll
$(function() {
  new WOW().init();
});

/*=========================================
                Owl carousel
==========================================*/

$(".owl-carousel").owlCarousel({
  loop: true,
  items: 2,
  center: true,
  autoplay: true,
  autoplayTimeOut: 50,
  autoplayHoverPause: true,
  margin: 30,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>'
  ],
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 1
    },
    768: {
      items: 2
    }
  }
});
