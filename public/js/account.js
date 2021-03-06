$(document).ready(function() {
    $("#passwordresetform").submit(function(event) {
        event.preventDefault();
        var form = $(this);
        var data = formToJSON(form);
        var check = JSON.parse(data);

        if (check.password === check.repeatpassword && check.password != undefined) {
            $.ajax({
                url: '/api/user/password',
                type: 'PATCH',
                dataType: 'json',
                data: data,
                contentType: 'application/json; charset=utf-8',

                error: function(res) {
                    data = res.responseJSON
                    if (data.success == false) {
                        // credintials were bad, reset the form:
                        form[0].reset();
                        alert(data.message)
                    } else {
                        // If the error was for some other reason, than what
                        // could be caught, log data, and alert errors. Don't reset
                        console.log(data)
                        alert("Errors occured during your request. Please try again.");
                    };
                },

                success: function(data) {
                    if (data.success) {
                        console.log(form);
                        // form.children("input[type=password]").each(function(field) {
                        //     field.val("");
                        // });
                        form[0].reset();
                        alert(data.message);
                        console.log(data.message);
                    } else {
                        // credintials were bad, reset the form:
                        form[0].reset();
                        alert(data.message);
                    };
                }

            }); //end of AJAX call
        } else {
            alert("Passwords didn't match.");
        }
    })
});