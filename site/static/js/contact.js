$(document).ready(function() {

    $("#form").submit(function(event) {
        name = capitalizeFirstLetter($("#name").val().trim())
        mobile = $("#mobile").val().trim()
        query = $("#query").val().trim()
        $.ajax({
            url: "https://formspree.io/suparshvadevelopers@gmail.com",
            method: "POST",
            data: { name: name, mobile: mobile, message: query },
            dataType: "json",
            success: function(data) {
                // $("#formbox").fadeOut();
                $("#msg").fadeIn()
            },
            error: function(err) {
                alert("Sorry could not submit your query. Please try again or contact us via phone!")
            }


        });

        event.preventDefault();
    });
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
