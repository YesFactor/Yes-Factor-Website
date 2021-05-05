function loadswiper(){
     var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });  
}
 
window.onload = function() {
    init();
    //alert("Tabletop initialised");
    myFunction();
    loadScript();
  };

var myVar;
function myFunction() {
  myVar = setTimeout(loadswiper, 2000);
}


function loadScript(){
  let myScript = document.createElement("script");
  myScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min.js");
  document.body.appendChild(myScript);
}

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1VW37qzucqNxqsOUNRYXpBJn8HKQSFGfW5ivKQ8n4t-U/edit?usp=sharing';

 function init() {
    Tabletop.init({
      key: public_spreadsheet_url,
      callback: showInfo,
      simpleSheet: true
    })
  }

 function showInfo(data, tabletop) {
    var y;
    y=" "
    for (var i = 0; i < data.length; i++){
      y = y + "<div class='blog-slider__item swiper-slide'><div></div><div class='blog-slider__img'><a href='" + data[i].VideoLink + "'target=_blank><img src='" + data[i].ImageLink  + "'/></a></div> <div class='blog-slider__content'><span class='blog-slider__code'>" + data[i].Date + "</span><div class='blog-slider__title'>" + data[i].Name + "</div><div class='blog-slider__text'>" + data[i].VideoDescription + "</div><a class='blog-slider__button' href='" + data[i].VideoLink + "'>Watch the video!</a></div></div>"
    }
    document.getElementById("demo").innerHTML = y;
    //console.log(x)
  }

$(document).ready(function(){
    setTimeout(function() {
        $('#loading').fadeOut();
    }, 1000);
});
