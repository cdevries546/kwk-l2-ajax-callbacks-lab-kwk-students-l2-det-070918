$(document).ready(function searchRepositories (){
$.ajax({
  type: "GET",
  url: "https://searchRepositories.com",
  success: function(data){
    $('text').text(JSON.stringify(data));
    
  }, 
  dataType: 'jsonp',
});
});