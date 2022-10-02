$(document).ready(function () {
    let emailRegex = new RegExp(
        "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    );

    $("#enter-button").click(function () {
        let email = $("#email").val();
        let email2 = $("#email2").val();

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
    });
});
