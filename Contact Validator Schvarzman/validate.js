

            function validar_email(email) {
                var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return regex.test(email) ? true : false;
            }
            function validateForm() {
                var n = document.forms["myForm"]["fname"].value;
                var e = document.forms["myForm"]["email"].value;
                if (n == "") {
                    alert("Name must be filled out");
                    return false;
                } else if
                    (e == "") {
                    alert("email must be filled out");
                    return false;
                } else if (validar_email(e)== false) {
                    alert("Wrong format email.");
                    return false;
                } 
            }
        