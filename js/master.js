$("#search").on("keyup", function() {
    const value = $(this)
        .val().toLowerCase();
    $(".grid a").filter(function() {
        $(this).toggle($(this).attr("data-title").toLowerCase().indexOf(value) > -1
        );
    });
});