function FindOutNow() {
  window.open(
    "https://www.youtube.com/channel/UC37QRCJznXwZ5xANpzDAWtQ",
    "_blank"
  );
}

function checkifMobile() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

function onButtonClick() {
  if (checkifMobile()) {
    window.open("upi://pay?pa=swapnilsahare23@okaxis");
  } else {
    window.open("/assets/upi.pdf");
  }
}

$(function () {
  $(".typed").typed({
    strings: [
      "WE WILL HELP YOU TO FIND YOUR",
      "WHAT IS YOUR",
      "HAVE YOU GOT YOUR",
    ],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 100,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 40,
    // time before backspacing
    backDelay: 2000,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {},
  });
});

$(document).ready(function () {
  var contentSection = $(".content-section");
  var navigation = $("nav");
  navigation.on("click", "a", function (event) {
    event.preventDefault(); //prevents previous event
    smoothScroll($(this.hash));
  });

  //update navigation on scroll...
  $(window).on("scroll", function () {
    updateNavigation();
  });
  //...and when the page starts
  updateNavigation();

  /////FUNCTIONS
  function updateNavigation() {
    contentSection.each(function () {
      var sectionName = $(this).attr("id");
      var navigationMatch = $('nav a[href="#' + sectionName + '"]');
      if (
        $(this).offset().top - $(window).height() / 2 < $(window).scrollTop() &&
        $(this).offset().top + $(this).height() - $(window).height() / 2 >
          $(window).scrollTop()
      ) {
        navigationMatch.addClass("active-section");
      } else {
        navigationMatch.removeClass("active-section");
      }
    });
  }
  function smoothScroll(target) {
    $("body,html").animate(
      {
        scrollTop: target.offset().top,
      },
      800
    );
  }
});
