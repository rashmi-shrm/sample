
var pagecount=0;

$(document).ready(function() {
  $('#search_btn').on('click', function() {
    $('button').prop('disabled', false);
    pagecount=1;
    action();
  });
  $('#previous').on('click', function() {
    pagecount--;
    if(pagecount<=0)
      pagecount=1;
    action();
  });
  $('#next').on('click', function() {
    pagecount++;
    action();
  });

  $('#text_area').keyup(function(event){
    if(event.keyCode == 13){
      $('#search_btn').click();
    }
  });
});

function action() {
  var item = $('#text_area').val();
  var link = 'http://127.0.0.1:3000/gallery/'+item+'/'+pagecount;
  if (item != '') {
   var searchResultHTML = '';
  
   $.ajax({
      url: '/gallery/'+item+'/'+pagecount,
      dataType: 'json',

      success: function(resp) {
        if(resp.hits.length==0)
          alert("sorry no results found");
        var result = "";
        $.each(resp.hits, function(index,value){
          result+="<div class=\"inner\">"+
          "<img class=\"list_img\" id=\""+value.id+"\" style=\"padding:1%;\" src=\""+value.webformatURL+"\">"+
          "</div>"
        }); 
        $(".card").html(result);
     },

     error: function(resp){
      pagecount--;
    }
  }); 
 }
}

