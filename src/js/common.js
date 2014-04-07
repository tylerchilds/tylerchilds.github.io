$(function(){

	//
	// Sticky header and footer
	//
	$(window).on('load resize', function(){
		$('body').css('padding-bottom', $('footer').outerHeight() + 'px');

		if( $(window).width() > 960 ){
			$('body').css('padding-top', $('header').outerHeight() + 'px');
		} else {
			$('body').css('padding-top', 0 + 'px');
		}
	});

	//
	// Scroll to top of the page
	// 
	// $('.to-top').on('click', function(){
	// 	$('html,body').animate({ scrollTop: $('body').offset().top }, 1000);
	// });

	// $(window).on('scroll', function(){
		
	// });

	// 
	// Get ReadMe and load it into the page
	// 
	// 

	var $readme = $('.readme');

	if($readme.length !== 0){
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

});

function b64_to_utf8( str ) {
    return atob( str );
}

function readmeFailed(elem){
	elem.html('Failed to load documentation');
}


