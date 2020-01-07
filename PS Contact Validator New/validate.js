

            function validar_email(email) {
                var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return regex.test(email) ? true : false;
            }
            function validateForm() {
                var n = document.forms["myForm"]["fname"].value;
                var e = document.forms["myForm"]["email"].value;
                if (n == "") {
                    var f = document.getElementById("firstname_error").innerHTML = "Name must be filled out";
                    return false;
                   
                } else if
                    (e == "") {
                        var f = document.getElementById("firstname_error").innerHTML = "";
                    var em = document.getElementById("email_error").innerHTML = "email must be filled out";
                    return false;
                } else if (validar_email(e)== false) {
                    var em = document.getElementById("email_error").innerHTML = "";
                    var wf = document.getElementById("wrongf_error").innerHTML = "Wrong format email.";
                    return false;
                } else {
                    var wf = document.getElementById("wrongf_error").innerHTML = "";
                }
            }

            function cleanFname(){
                f = document.getElementById("firstname_error").innerHTML = "";
            }
            function cleanemail(){
                e = document.getElementById("email_error").innerHTML = "";
               wf = document.getElementById("wrongf_error").innerHTML = "";
            }
            
        