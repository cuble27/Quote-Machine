var theQuote="";
var theAuthor="";

var colors = ['rgb(219, 93, 33)', 'rgb(38, 187, 99)', 'rgb(20, 77, 217)', 'rgb(177, 205, 85)', 'rgb(115, 1, 9)', 'rgb(166, 62, 238)',
               'rgb(153, 41, 61)', 'rgb(38, 176, 159)', 'rgb(156, 60, 35)', 'rgb(26, 148, 13)', 'rgb(1, 36, 47)'];

// ADD A HINT AFTER 7 SECONDS!!!

function newQuote() {
   $('.newQuote').addClass('spin');
   $('.loading').fadeIn(800, function() { $(this).addClass('pulse'); });

   $.ajax({
      url: 'https://crossorigin.me/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      type: 'GET',
      dataType: 'json',
      callback: '?',
      crossDomain: true,

      success: function(quote){
         theQuote= quote[0].content;
         theAuthor= quote[0].title;
         var actualColor= colors[Math.floor(Math.random()*colors.length)];

         $('.quote, .author, .newQuote').fadeOut('400', function() {
            $('.loading').fadeOut('400');

            $('.quote').html('<p>'+theQuote+'</p>');
            $('.author').html('<p>-  '+theAuthor+'</p>');

            $('.newQuote').removeClass('spin');
            $('.loading').removeClass('pulse');

            $("html body").animate({
               backgroundColor: actualColor,
               color: actualColor
            }, 400);
            $('.quote, .author, .newQuote').fadeIn('400');
         });
            // SECOND PROTOTYPE OF ANIMATION
            // $('.quoteDiv').animate({height:"toggle"}, 600, function(){
            //    $('.quote').html('<p>'+theQuote+'</p>');
            //    $('.author').html('<p>'+theAuthor+'</p>');
            //    $('.newQuote').removeClass('spin');
            //    $('.quoteDiv').animate({height:"toggle"}, 600);
            // });
      },
      cache:false
   });
}

$('.newQuote').click(newQuote);

$(document).ready(newQuote());
