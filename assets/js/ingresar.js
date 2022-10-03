$(document).ready(function () {
    let emailRegex = new RegExp(
        "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    );

    $("#enter-button").click(function () {
        let email = $("#email").val();

        if (emailRegex.test(email)) {
            $("#email").removeClass("is-invalid");
            $("#email").addClass("is-valid");
        } else {
            $("#email").removeClass("is-valid");
            $("#email").addClass("is-invalid");
        }
    });
});
