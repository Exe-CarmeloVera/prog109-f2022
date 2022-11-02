function ValidateForm() {
    var validFirstName = false;
    var validLastName = false;
    var validEmail = false;
    var validPhoneNumber = false;
    var validUsername = false;
    var validPassword = false;
    var validAddress = false;
    var validCity = false;
    var validState = false;
    var validCountry = false;
    var validZipcode = false;

    var letters = /^[A-Za-z]/;
    var numbers = /^[0-9]+$/;
    var errorMessages = ""; //All the error messages are going to stay in this variable
    /**** VALIDATES USERNAME ****
    */
    //Required field
    //This syntax is using name-of-form.name-of-field.value
    //You can also use document.getElementById("id-of-field").value

    /**** VALIDATES FIRSTNAME **** 
  */
    //Required: Maximun 20 characters.
    if (myContact.firstname.value.length > 20 ||
        myContact.firstname.value === null ||
        myContact.firstname.value === "" ||
        !myContact.firstname.value.match(letters))
        errorMessages += "<p>The firstname must be less than 20 characters and it is required. Only letters are accepted</p>";
    else
        validFirstName = true;

    /**** VALIDATES LASTNAME **** 
 */
    //Required: Maximun 50 characters.
    if (myContact.lastname.value.length > 50 ||
        myContact.lastname.value === null ||
        myContact.lastname.value === "" ||
        !myContact.lastname.value.match(letters))
        errorMessages += "<p>The lastname must be less than 50 characters and it is required. Only letters are accepted</p>";
    else
        validLastName = true;

    /**** VALIDATES EMAIL **** 
*/
    //Required.
    if (myContact.email.value === null ||
        myContact.email.value === "")
        errorMessages += "<p>The email is required</p>";
    else
        validEmail = true;

    /**** VALIDATES PHONE NUMBER **** 
  */
    //Required: Maximun 15 digits.
    if (myContact.phone.value.length > 15 ||
        myContact.phone.value === null ||
        myContact.phone.value === "" ||
        !myContact.phone.value.match(numbers))
        errorMessages += "<p>The phone number must be less than 15 digits and it is required</p>";
    else
        validPhoneNumber = true;

    /**** VALIDATES USERNAME **** 
    */
    //Required: Maximun 12 characters.
    if (myContact.username.value.length > 12 ||
        myContact.username.value === null ||
        myContact.username.value === "")
        errorMessages += "<p>The username must be less than 12 characters and it is required</p>";
    else
        validUsername = true;


    /**** VALIDATES PASSWORD ****
    */
    //Required.  Maximum 7 characters.
    if (myContact.password.value.length > 7 ||
        myContact.password.value === null ||
        myContact.password.value === "")
        errorMessages += "<p>The password must be less than 7 characters and it is required</p>";
    else
        validPassword = true;


    /**** VALIDATES ADDRESS **** 
*/
    //Required.
    if (myContact.address.value === null ||
        myContact.address.value === "")
        errorMessages += "<p>The address is required</p>";
    else
        validAddress = true;

    /**** VALIDATES CITY **** 
*/
    //Required.
    if (myContact.city.value === null ||
        myContact.city.value === "")
        errorMessages += "<p>The city is required</p>";
    else
        validCity = true;

    /**** VALIDATES STATE **** 
*/
    //Required.
    if (myContact.state.value === null ||
        myContact.state.value === "")
        errorMessages += "<p>The state is required</p>";
    else
        validState = true;

    /**** VALIDATES COUNTRY **** 
*/
    //Required.
    if (myContact.countries.value === null ||
        myContact.countries.value === "")
        errorMessages += "<p>The country is required</p>";
    else
        validCountry = true;

    /**** VALIDATES ZIPCODE **** 
*/
    //Required.
    if (myContact.zipcode.value === null ||
        myContact.zipcode.value === "")
        errorMessages += "<p>The zipcode is required</p>";
    else
        validZipcode = true;


    document.getElementById("errorMessages").innerHTML = errorMessages;
    return (validFirstName && validLastName && validEmail && validPhoneNumber && validUsername && validPassword &&
        validAddress && validCity && validState && validCountry && validZipcode);
}

