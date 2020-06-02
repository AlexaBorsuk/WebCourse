'use strict';

$("document").ready(
    $("form").validate({
        rules: {
            name: {
                required: true,
/*                minLength: 2*/ //it makes bags
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
               /* minLength: 5*/ //it makes bags
            }
        },
        messages: {
            name: {
                required: "Please specify your name",
                minlength: "Check your input - you need more chars",
            },
            email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com",
            },
            message: {
                required: "Please, write a little bit more",
                minlength: "Check your input - you need more chars",
            },
        },
        focusInvalid: true,
        errorClass: "input_error",
        submitHandler: function (form, event) {
            //alert("dfghjklnahuiblyat");

/*            event.preventDefault();
            let formData = new FormData(event.target);
            let obj = {};
            formData.forEach((value, key) => obj[key] = value);
            let request = new Request(event.target.action, {
                url: 'https://www.google.com/',
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-Type': 'application/json',
                },

            });
            fetch(request).then(
                function(response) {
                    console.log(response);
                },
                function(error) {
                    console.error(error);
                }
            );
            console.log('Запрос отправляется');*/

            $.ajax({
                url: 'http://httpbin.org/post',
                type: 'post',
                dataType: 'json',
                data: $('form').serialize(),
                success: function(data) {
                    alert(data);
                },
                error: function (status) {
                    alert(status);
                }
            });

        }
    })
);



