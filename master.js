// $(document).ready(function() {
//     $('#search').hideseek();
// });

$("#search").on("keyup", function() {
    var value = $(this)
        .val().toLowerCase();
    $(".grid a").filter(function() {
        $(this).toggle($(this).attr("data-title").toLowerCase().indexOf(value) > -1
        );
    });
});

lightbox.option({
    wrapAround: true,
    alwaysShowNavOnTouchDevices: true,
    showImageNumberLabel: false
});