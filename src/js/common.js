
// 
// Get ReadMe and load it into the page
// 
// 

var $readme = $('.readme');

if($readme.length != 0){
	var converter = new Markdown.getSanitizingConverter();

	$readme.each(function(){
		if (typeof atob == 'function') { 

			$this = $(this);

			$.ajax({
				url: "https://api.github.com/repos"+ $(this).data('src') + "/readme",
				methon: "GET",
				dataType: 'jsonp',
				success: function(response){
					var markdown = b64_to_utf8( response.data.content );
					var markup = converter.makeHtml(markdown);

					$this.html(markup);
				},
				error: function(){
					readmeFailed($(this));
				}
			});
		} else {
			readmeFailed($(this));
		}
	});
}

function b64_to_utf8( str ) {
    return atob( str );
}

function readmeFailed(elem){
	elem.html('Failed to load documentation')
}

