$(document).ready(function () {
    let emailRegex = new RegExp(
        "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    );
    let passwordRegex = new RegExp(
        "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
    );

    $("#register-button").click(function () {
        let email = $("#email").val();
        let email2 = $("#email2").val();
        let password = $("#password").val();
        let password2 = $("#password2").val();

        if (emailRegex.test(email) && email === email2) {
            $("#email").removeClass("is-invalid");
            $("#email2").removeClass("is-invalid");
            $("#email").addClass("is-valid");
            $("#email2").addClass("is-valid");
        } else {
            $("#email").removeClass("is-valid");
            $("#email2").removeClass("is-valid");
            $("#email").addClass("is-invalid");
            $("#email2").addClass("is-invalid");
        }

        if (passwordRegex.test(password) && password === password2) {
            $("#password").removeClass("is-invalid");
            $("#password2").removeClass("is-invalid");
            $("#password").addClass("is-valid");
            $("#password2").addClass("is-valid");
        } else {
            $("#password").removeClass("is-valid");
            $("#password2").removeClass("is-valid");
            $("#password").addClass("is-invalid");
            $("#password2").addClass("is-invalid");
        }
    });
});
