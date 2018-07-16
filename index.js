$(document).ready(function (){
  $.ajax({
  type: "GET",
  url: "https://a",
  success: function(data){
    $('text').text(JSON.stringify(data));
    
  }, 
  dataType: 'jsonp',
});
});
