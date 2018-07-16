$(document).ready(function searchRepositories (){
$.ajax({
  type: "GET",
  url: "https://searchRepositories.com",
  success: function(data){
    $('searchTerms').text(JSON.stringify(data));
    
  }, 
  dataType: 'jsonp',
});
});

$.get( "ajax/test.html", function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
});