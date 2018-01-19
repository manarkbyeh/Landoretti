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

    /***
     * validation form
     */
    $('#form-dff').submit(function(e) {
            e.preventDefault();
            // free box error
            $('#manar-msg-error').hide().html('');
            // remove invalid class
            $('.form-control').removeClass('is-invalid')
            $('.input-group').removeClass('is-invalid-price')

            var fileds = [
                { name: 'auction', msg: 'this auction is required', test: /^[a-zA-Z0-9]+$/ },
                { name: 'year', msg: 'this year is required', test: /^[0-9]+$/ },
                { name: 'width', msg: 'this width is required', test: /^[0-9]+$/ },
                { name: 'height', msg: 'this height is required', test: /^[0-9]+$/ },

                { name: 'description', msg: 'this description is required', test: /^[a-zA-Z0-9]+$/ },
                { name: 'condtion', msg: 'this condtion is required', test: /^[a-zA-Z0-9]+$/ },
                { name: 'origine', msg: 'this origine is required', test: /^[a-zA-Z0-9]+$/ },
                { name: 'date', msg: 'this date is required', test: /^[0-9]+\-[0-9]+\-[0-9]+$/ },

                { name: 'price1', msg: 'this price is required', test: /^[0-9]+$/ },
                { name: 'price2', msg: 'this price is required', test: /^[0-9]+$/ },
                { name: 'price3', msg: 'this price is required', test: /^[0-9]+$/ },





            ]
            var error_messa = []; //manar-msg-error

            $.each(fileds, function(item, r) {

                var inputSelector = fileds[item],
                    inputValue = $('#' + inputSelector.name).val();
                pattren = inputSelector.test;
                if (inputSelector.name == 'date') console.log('data : ', inputValue)
                    // contenue if no error 
                if (pattren.test(inputValue)) {
                    return;
                }
                if (
                    inputSelector.name == 'price1' ||
                    inputSelector.name == 'price2' ||
                    inputSelector.name == 'price3'
                ) {
                    $('#' + inputSelector.name).parent().addClass('is-invalid-price')
                }

                $('#' + inputSelector.name).addClass('is-invalid')
                error_messa.push(inputSelector.msg)

            });
            /**
             * desplay error message
             */
            if (error_messa.length > 0) {
                $('#manar-msg-error').show()

                $.each(error_messa, function(item, r) {
                    let messagText = error_messa[item];
                    //console.log(messagText);
                    var msg = "<h5><i class=\"fa fa-circle\"></i> " + messagText + "</h5>";
                    $('#manar-msg-error').append(msg)


                });
            }



        })
        /***
         *  
         * login user
         */
    var userlink = './user.html',
        loginLink = './login.html';
    $("#manar-user-auth").load("./assets/loginlink.html");

    $('body').on('click', '#manar-btn-go-profile', function() {

        $("#manar-user-auth").html('');
        $("#manar-user-auth").load("./assets/user.html");
    })
    $('body').on('click', '#manar-go-form-log-in', function() {

        $("#manar-user-auth").html('');
        $("#manar-user-auth").load("./assets/login.html");
    })
});