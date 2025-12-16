function validateRegistration()
{
   
    let name=document.forms["R_form"]["uname"].value;
    let email= document.forms["R_form"]["r_email"].value;
    let password=document.forms["R_form"]["r_pass"].value;
    let phone_num=document.forms["R_form"]["phn_num"].value;

    if(name==="")
    {
        alert("Enter name");
        return false;
    }

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

    if((phone_num==="") && (phone_num.length<10))
    {
        alert("enter valid phone no.")
        return false;
    }
       
     alert("Registration successfull!!");
    return true;

    
    
}
