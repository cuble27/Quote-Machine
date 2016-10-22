// $(document).ready(function() {

var theQuote="";
var theAuthor="";

function newQuote() {
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
         $('.quote').html('<p>'+theQuote+'</p>');
         $('.author').html('<p>'+theAuthor+'</p>');
      },
      cache:false
   });
}

$('.newQuote').click(newQuote);
$(window).load(newQuote()); //The api is slow, so I have to get a quote asap
