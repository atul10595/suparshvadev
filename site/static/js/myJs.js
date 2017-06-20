function loadUser() {
    var header = $('#template').html();
    Mustache.parse(template); // optional, speeds up future uses
    var rendered = Mustache.render(template, {
        name: "Luke"
    });
    $('#target').html(rendered);

	// $('#target').html(rendered);
	//     $.get('partials/head.html', function(template) {
	//     	var rendered = Mustache.render(template, {name: "Luke"});
	//     $('#head').html(rendered);
 // 	});

}
