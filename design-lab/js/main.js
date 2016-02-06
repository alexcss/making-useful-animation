;(function($){
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, "easeOutBack");
					return false;
				}
			}
		});

		$('.svg-draw path').each(function(){
			// console.log(this)
			var pathLenght = $(this).get(0).getTotalLength();
			$(this).attr({
				'stroke-dasharray' : pathLenght + " " + pathLenght,
				'stroke-dashoffset' : pathLenght
			});
		})
	});
})(jQuery);
