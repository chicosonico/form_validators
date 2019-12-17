
// Getting all inputs
var firstname = document.forms["vform"]["firstname"];
var lastname = document.forms["vform"]["lastname"];
var email = document.forms["vform"]["email"];
var password = document.forms["vform"]["password"];
var password_confirmation = document.forms["vform"]["password_confirmation"];

// Getting all error display
var firstname_error = document.getElementById("firstname_error");
var lastname_error = document.getElementById("lastname_error");
var email_error = document.getElementById("email_error");
var password_error = document.getElementById("password_error");

// Setting all event Listeners
firstname.addEventListener("blur", firstnameVerify, true);
lastname.addEventListener("blur", lastnameVerify, true);
email.addEventListener("blur", emailVerify, true);
password.addEventListener("blur", passwordVerify, true);

// validation function
 function Validate(){
     //firstname validation
     if (firstname.value == ""){
         firstname.style.border = "1px solid red";
         firstname_error.textContent = "First name is required";
         firstname.focus();
         return false;
     }
     //last name validation
     if (lastname.value == ""){
         lastname.style.border = "1px solid red";
         lastname_error.textContent = "Last name is required";
         lastname.focus();
         return false;
     }
     //email validation
     if (email.value == ""){
         email.style.border = "1px solid red";
         email_error.textContent = "email is required";
         email.focus();
         return false;
     }
     //password validation
     if (password.value == ""){
         password.style.border = "1px solid red";
         password_error.textContent = "Password is required";
         password.focus();
         return false;
     }

     //check if two passwords match
     if (password.value != password_confirmation.value){
         password.style.border ="1px solid red";
         password_confirmation.style.border = "1px solid red";
         password_error.textContent = "The two passwords do not match.";
         return false;
     }
 }
 //event handler function
 function firstnameVerify(){
     if (firstname.value != ""){
         firstname.style.border = "1px solid #5E6E66"
         firstname_error.innerHtml = "";
         return true;

     }
 }

 function lastnameVerify(){
     if (lastname.value != ""){
         lastname.style.border = "1px solid #5E6E66"
         lastname_error.innerHtml = "";
         return true;

     }
 }

 function emailVerify(){
     if (email.value != ""){
         email.style.border = "1px solid #5E6E66"
         email_error.innerHtml = "";
         return true;

     }
 }

 function passwordVerify(){
     if (password.value != ""){
         password.style.border = "1px solid #5E6E66"
         password_error.innerHtml = "";
         return true;

     }
 }
