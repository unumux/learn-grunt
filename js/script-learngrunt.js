$(document).ready(function(){
	$('body').bind('copy', function(e){
		e.preventDefault();
	});

	$('pre').css('display', 'none');
});

$('button').on('click', function(){
	$(this).next().toggle("slow", function(){

	});
});