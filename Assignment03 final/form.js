function validateform()
{
    let email= document.forms["L_form"]["i_email"].value;
    let password=document.forms["L_form"]["pass"].value;
    

    if(email==="")
    {
        alert("email is required");
        return false;
    }

    if(password ==="")
    {
        alert("Password is required");
        return false;
    }

    if(password.length < 6)
    {
        alert("Password must be of 6 charcters mininum");
       return false;
    }

    
}