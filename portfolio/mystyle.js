function ValidateForm() {

    var validFullName = false;
    var validEmail = false;
    var validComment = false;
    var letters = /^[A-Za-z]/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var errorMessages = "";


    if (myContact.fullname.value === null ||
        myContact.fullname.value === "" ||
        !myContact.fullname.value.match(letters)) {

        myContact.fullname.focus();
        errorMessages += "<p>Fullname is required. Only letters are accepted.</p>";
    }

    else
        validFirstName = true;

    if (myContact.email.value === null ||
        myContact.email.value === "" ||
        !myContact.email.value.match(mailformat)) {

        myContact.email.focus();
        errorMessages += "<p>Email is required. You have entered an invalid email address. </p>";
    }

    else
        validEmail = true;


    if (myContact.commentbox.value === null ||
        myContact.commentbox.value === "" ||
        !myContact.commentbox.value.match(mailformat)) {

        myContact.commentbox.focus();
        errorMessages += "<p>Comments are required. </p>";
    }

    else
        validEmail = true;

        document.getElementById("errorMessages").innerHTML = errorMessages;
        return (validFullName && validEmail && validComment);
}