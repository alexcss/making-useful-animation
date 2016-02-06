;(function($){

	$(window).load(function() {

		setTimeout(function(){
			$('body').removeClass('loading');

		}, 2000);


	});
	$(document).scroll(function() {
		console.log($(this).scrollTop());
	});

})(jQuery);
