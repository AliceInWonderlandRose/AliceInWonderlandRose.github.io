$.get("http://AliceInWonderlandRose.github.io/partials/nav.html", function(data){
	
	$(document).ready(function(){
	
	$(".container").prepend(data);
	$(".container").fadeIn();
	//Place code for the footer in here
	});

	});

$.get("http://AliceInWonderlandRose.github.io/partials/footer.html", function(data){
	
	$(document).ready(function(){
	
	$(".container").append(data);
	$(".container").fadeIn();
	//Place code for the footer in here
	});

	});