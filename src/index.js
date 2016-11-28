
var displayed = 'films';

$('#toggle').click(function () {

  
  $.get('data.json').then (function (data) {
    if (displayed == 'films') {
      $('#text').html(data.series);
      displayed = 'series';
    }
    else {
     $('#text').html(data.films); 
     displayed = 'films';
    }
  });  

});



// $.getJSON('film.json').then  (function(data){
//   console.log(data.films[0]);
// });

