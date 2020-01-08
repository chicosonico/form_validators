

            function validar_email(email) {
                var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return regex.test(email) ? true : false;
            }
            function validateForm() {
                var error = 0;
                var n = document.forms["myForm"]["fname"].value;
                var e = document.forms["myForm"]["email"].value;
                if (n == "") {
                    var f = document.getElementById("firstname_error").innerHTML = "Name must be filled out";
                    error = 1;
                   
                } else if
                    (e == "") {
                        var f = document.getElementById("firstname_error").innerHTML = "";
                    var em = document.getElementById("email_error").innerHTML = "email must be filled out";
                    error ++;
                } else if (validar_email(e)== false) {
                    var em = document.getElementById("email_error").innerHTML = "";
                    var wf = document.getElementById("wrongf_error").innerHTML = "Wrong format email.";
                    error++;
                } else {
                    var wf = document.getElementById("wrongf_error").innerHTML = "";
                }if (error == 0){
                    return true;

                }else {
                    return false;
                }
            }

            function cleanFname(){
                f = document.getElementById("firstname_error").innerHTML = "";
            }
            function cleanemail(){
                e = document.getElementById("email_error").innerHTML = "";
               wf = document.getElementById("wrongf_error").innerHTML = "";
            }
            
        