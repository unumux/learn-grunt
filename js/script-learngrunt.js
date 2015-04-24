$(document).ready(function(){
	$('body').bind('copy', function(e){
		e.preventDefault();
	});
	if ($('pre').hasClass('show')){

	}
	else {
		$('pre').css('display', 'none');
	}
});

$('button').on('click', function(){
	$(this).next().toggle("slow", function(){

	});
});