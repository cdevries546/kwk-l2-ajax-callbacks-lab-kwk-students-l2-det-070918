$(document).ready(function searchRepositories() {
$.ajax({
url:"https://api.github.com",
data: data,
success: success,
dataType: "jsonp",
});
});

$.get( "ajax/test.html", function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
});