var nameError = document.getElementById('name-error');
var PhoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;  
    }
    if(!name.match(/^[A-za-z]*\s{1}[A-za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;   
    }
    nameError.innerHTML = '<i class="fa-duotone fa-check"></i>';
    return true;
}
function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0){
        PhoneError.innerHTML = 'phone is required';
        return false;
    }
    if(phone.length !== 10){
        PhoneError.innerHTML = 'phone No should be 10 digits';
        return false;
    }
     if(!phone.match(/^[0-9]{10}$/)){
        PhoneError.innerHTML = 'phone is required';
        return false;
    }
    PhoneError.innerHTML = '<i class="fad fa-check"></i>';
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;
    
    if(email.length == 0){
        emailError.innerHTML = 'Email is  required'
        return false;
    }
    if(!email.match(/^[A-za-z\._\-[0-9]*[@][A-za-z]*[\.][a-z]{2,5}$/)){
        emailError.innerHTML = 'Email is  Invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fa-regular fa-check-to-slot"></i>';
    return true;

}


function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 100;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-regular fa-check-to-slot"></i>';
    return true;

}
function validateForm(){

    if(!validateName()|| !validatePhone()|| !validateEmail() || !validateMessage())
    submitError.style.display = 'block';
    submitError.innerHTML = ' ';
    setTimeout(function(){submitError.style.display = 'none';},3000);
     return false;


}

