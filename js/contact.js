const form = document.querySelector('form');
const thankyou = document.querySelector('.thank-you');
const fnameInput = document.querySelector('input[name="first_Name"]');
const lnameInput = document.querySelector('input[name="last_Name"]');
const emailInput = document.querySelector('input[name="Email"]');
const phoneInput = document.querySelector('input[name="Phone"]');
const locationInput = document.querySelector('input[name="location"]');
const messageInput = document.querySelector('textarea[name="message"]');

const inputs =[
    fnameInput,
    lnameInput,
    emailInput,
    phoneInput,
    messageInput,
]

const isValidEmail = (email) => {
    const re =/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return re.test(String(email).toLowerCase()); 
};

const isValidPhone = (phone) => {
    const phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return phoneno.test(phone); 
};

let isFormaValid = false;
let isValidationOn = false;

const resetElm = (elm) => {
    elm.classList.remove("invalid");
    elm.nextElementSibling.classList.add("hidden");
};
const ivalidateElm = (elm) => {
    elm.classList.add("invalid");
    elm.nextElementSibling.classList.remove("hidden");
};
const validateInputs = () => {
    if(!isValidationOn) return;

    isFormaValid = true;
    resetElm(fnameInput);
    resetElm(lnameInput);
    resetElm(emailInput);
    resetElm(phoneInput);

    resetElm(messageInput);
    

    if(!fnameInput.value){
        isFormaValid = false;
        ivalidateElm(fnameInput);
    }

    if(!lnameInput.value){
        isFormaValid = false;
        ivalidateElm(lnameInput);
    }

    if(!isValidEmail(emailInput.value)){
        isFormaValid = false;
        ivalidateElm(emailInput)
    }

    if(!isValidPhone(phoneInput.value)){
        isFormaValid = false;
        ivalidateElm(phoneInput)
    }

    if(!messageInput.value){
        isFormaValid = false;
        ivalidateElm(messageInput)
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    isValidationOn = true;
    validateInputs();
});

inputs.forEach(input => {
    input.addEventListener("input", () =>{
        validateInputs();
    });
});

var recaptcha_response = "";
function submitUserForm(){
    if(recaptcha_response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">Please fill in Captcha.</span>';
        return false;
    }
}

function verifyCaptcha(token) {
    recaptcha_response = token;
    document.getElementById('g-recaptcha-error').innerHTML = '';
}