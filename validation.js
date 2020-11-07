function validation(){
    var name = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var enfirst = document.getElementById('enFirst').value;
    var enlast = document.getElementById('enLast').value;
    var cbranch = document.getElementById('cBranch').value;
    var message = document.getElementById('Message').value;

    if(name == ""){
        document.getElementById('errorname').innerHTML = "Please Enter Your Name";
        setTimeout(() => document.getElementById('errorname').remove(), 5000);
        return false;
    }
    if(email == ""){
        document.getElementById('erroremail').innerHTML = "Please Enter Your Email";
        setTimeout(() => document.getElementById('erroremail').remove(), 5000);
        return false;
    }
    if(enfirst.length != 2){
        document.getElementById('errorenfirst').innerHTML = "Please Enter First Two Digits of your Enrollment No.";
        setTimeout(() => document.getElementById('errorenfirst').remove(), 5000);
        return false;
    }
    if(enlast.length != 3){
        document.getElementById('errorenlast').innerHTML = "Please Enter Last Three Digits of your Enrollment No.";
        setTimeout(() => document.getElementById('errorenlast').remove(), 5000);
        return false;
    }
    if(message.length == 0){
        document.getElementById('errormessage').innerHTML = "Please enter your message";
        setTimeout(() => document.getElementById('errormessage').remove(), 5000);
        return false;
    }
    if(message.length < 50){
        document.getElementById('errormessage').innerHTML = "Minimum 50 characters required";
        setTimeout(() => document.getElementById('errormessage').remove(), 5000);
        return false;
    }
    if(name != "" && email != "" && enfirst.length == 2 && enlast.length == 3 && message.length >= 50){
        alert('Message sent Successfully...');
    }
}