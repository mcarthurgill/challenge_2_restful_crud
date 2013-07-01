var handlerIn = function(show_link) {
	var route = $(show_link).attr('href');
	$('.added').fadeOut();
	$.ajax({
		type: "GET",
		url: route
	}).done(function(data){
		$('.added').empty().hide().append(data).fadeIn("slow");
	});
}

var deleteNote = function(form) {
	route = $(form).attr('action');
	if(confirm("Are you sure you want to delete this note?")){
		$.ajax({
			type: "DELETE",
			url: route
		}).done(function(data){
			$('#note_' + data).fadeOut("slow").empty();
		});
	}
}

var showLists = function(form) {
	var route = $(form).find('input').attr('id');
	$.ajax({
		type: "GET",
		url: '/' + route 
	}).done(function(data){
		$('.added').empty().hide().append(data).fadeIn("slow");
	});
}




$(document).ready(function() {
	$('#get_users').on("submit", function(e){
		e.preventDefault(); 
		showLists(this);
	});

	$('#get_notes').on("submit", function(e){
		e.preventDefault(); 
		showLists(this);
	});


	$('.added').on('click', '#delete_note', function(e){ 
		e.preventDefault(); 
		deleteNote(this);
	});

	$('.added').on('mouseover', '.show_user', function(e){
		e.preventDefault(); 
		handlerIn(this);
	});

	$('.added').on('mouseover', '.show_note', function(e){
		e.preventDefault(); 
		handlerIn(this);
	});
});
