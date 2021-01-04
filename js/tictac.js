console.log('hi')

$(document).ready(function(){
  $('#a1').on('click', function(){
    $('#a1').css({backgroundColor:"red"}); //gotta be in camelCase
  });
});
