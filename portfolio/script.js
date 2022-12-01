function ValidateForm() {

    var validFullName = false;
    var validEmail = false;
    var validComment = false;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var errorMessages = "";


    if (myContact.fullname.value === null ||
        myContact.fullname.value === "") {

        myContact.fullname.focus();
        errorMessages += "<p>Fullname is required. Only letters are accepted.</p>";
    } else {
        validFullName = true;
    }

    if (myContact.email.value === null ||
        myContact.email.value === "" ||
        !myContact.email.value.match(mailformat)) {

        myContact.email.focus();
        errorMessages += "<p>Email is required. You have entered an invalid email address. </p>";
    } else {
        validEmail = true;
    }


    if (myContact.commentbox.value === null ||
        myContact.commentbox.value === "") {

        myContact.commentbox.focus();
        errorMessages += "<p>Comments are required. </p>";
    } else {
        validComment = true;
    }

    document.getElementById("errorMessages").innerHTML = errorMessages;
    return (validFullName && validEmail && validComment);
}

addEventListener("load", function (event) {
    var d = new Date();
    document.getElementById("footer").innerHTML = d;
});

