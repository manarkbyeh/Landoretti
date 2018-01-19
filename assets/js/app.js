"use strick";
$(document).ready(function() {
    $('.carousel').carousel('pause');

    $('#manar-toggle-list').click(function() {
        $('#manar-list-toggle-selector').toggle();

        $(this).toggleClass('manarrotatison');
    });

    $('.input-group').click(function(event) {
        event.stopPropagation();
        $('.input-group').removeClass('input-group-is-fouses')
        $(this).addClass('input-group-is-fouses')
    })
    $(document).click(function() {
        $('.input-group').removeClass('input-group-is-fouses')
    })
});