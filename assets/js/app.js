"use strick";
$(document).ready(function() {
    $('.carousel').carousel('pause');

    $('#manar-toggle-list').click(function() {
        $('#manar-list-toggle-selector').toggle();

        $(this).toggleClass('manarrotatison');
    })

});