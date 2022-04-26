var formOK = false;

function validatePDF(objFileControl) {
    var file = objFileControl.value;
    var len = file.length;
    var ext = file.slice(len - 4, len);
    if (ext.toUpperCase() == ".PDF") {
        formOK = true;

    } else {
        formOK = false;
        alert("Sadece pdf.");

    }
}


function validateEmail(emailAdress) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
        return true;
    } else {
        return false;
    }
}








let username = document.getElementById('name');
let pasword = document.getElementById('pasword');
let email = document.getElementById('email');
let submit = document.getElementById('submit');


submit.onclick = function() {

    let checker = true;

    if (username.value < 6 && username.value[0].toUpperCase() === username.value[0] && pasword.value < 6 && validateEmail(email.value) === checker) {
        alert('duzgun');
        checker = false;
    } else(alert('duzgun yaz'))


}