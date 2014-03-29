
// 
// Get ReadMe and load it into the page
// 
// 

var $readme = $('.readme');

if($readme.length != 0){
	console.log('not zero');

	$readme.each(function(){
		console.log($(this).data('src'));
		$.ajax({
			url: $(this).data('src'),
			success: function(data){

			},
			dataType: 'md'
		});
	});
	
	//converter = new Markdown.Converter();
}

