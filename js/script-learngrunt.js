$(document).ready(function(){
	$('body').bind('copy', function(e){
		e.preventDefault();
	});
	

	$('pre').each(function(){
		if ($(this).hasClass('show')){

			}
			else {
				$(this).css('display', 'none');
			}
	});
});

$('button').on('click', function(){
	$(this).next().toggle("slow", function(){

	});
});