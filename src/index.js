console.log($)

$.getJSON('http://search.twitter.com/search.json?q=%40bocoup&amp;callback=?', function(tweets){
  console.log(tweets);
});