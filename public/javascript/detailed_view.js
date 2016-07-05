function fetch_details(id){
	var url = '/gallery/'+id;
  	$.getJSON(url, function(resp) {
  		 detailed_page_url = resp.hits[0]['pageURL'];
 		 window.open(detailed_page_url, '_blank');
  	});
}


$(document).ready(function() {
	$('.card').on('click', 'img.list_img', function() {
    	var id = $(this).attr('id');
  		fetch_details(id); 	
  	});
});
