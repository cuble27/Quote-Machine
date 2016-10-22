// $(document).ready(function() {

var theQuote="";
var theAuthor="";
// $(document).ready(function() {
//
//    $('.newQuote').animate({  borderSpacing: -180 }, {
//        step: function(now,fx) {
//          $(this).css('transform','rotate('+now+'deg)');
//        },
//        duration:'slow'
//    },'linear');
// });

function newQuote() {
   $('.newQuote').addClass('spin');
   console.log("starts loading api");
   $.ajax({
      url: 'https://crossorigin.me/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      type: 'GET',
      dataType: 'json',
      callback: '?',
      crossDomain: true,
      success: function(quote){
         theQuote= quote[0].content;
         theAuthor= quote[0].title;
         $('.quoteDiv').animate({height:"toggle"}, 600, function(){
            $('.quote').html('<p>'+theQuote+'</p>');
            $('.author').html('<p>'+theAuthor+'</p>');
            $('.newQuote').removeClass('spin');
            $('.quoteDiv').animate({height:"toggle"}, 600);
         });

         //       FIRST PROTOTYPE OF ANIMATION
         // $('.quote, .author').fadeOut('400', function() {
         //    $('.quote').html('<p>'+theQuote+'</p>');
         //    $('.author').html('<p>'+theAuthor+'</p>');
         //    $('.quote, .author').fadeIn('400');
         // });

      },
      cache:false
   });
}

$('.newQuote').click(newQuote);
$(window).load(newQuote()); //The api is slow, so I have to get a quote asap
