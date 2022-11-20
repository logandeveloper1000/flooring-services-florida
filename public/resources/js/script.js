function getID(a){
    return document.getElementById(a)
}

function setID() {
    var result = '';
    var num = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersNum = '123456789'
    var charactersLength = characters.length;
    var charactersNumLength = charactersNum.length;
    for ( var i = 0; i < 3; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        num += charactersNum.charAt(Math.floor(Math.random() * charactersNumLength));
    }
    getID('confirmation-number').innerHTML = `T000-${num}-${result}`
}

function checkZip(str){
    return /^\d{5}(-\d{4})?$/.test(str);
}
function validateZipMobile(){
    var zip = document.getElementById('zipcode-input-mobile').value;
    var messageBox = document.getElementById('validate-input-zipcode');
    var message = document.getElementById('validate-input-zipcode-text')
    if(checkZip(zip) == true){
        message.innerHTML = "";
        zipcodeMobile();
        messageBox.style.display = "none";
    }else{
        message.innerHTML = "Please check if your zipcode is correct";
        messageBox.style.display = "block";
    }
}
function validateZipDesk(){
    var zip = document.getElementById('js-zipcode-input-desktop').value;
    var messageBox = document.getElementById('validate-input-zipcodedesk');
    var message = document.getElementById('validate-input-zipcodedesk-text')
    if(checkZip(zip) == true){
        message.innerHTML = "";
        zipcodeDesktop();
        messageBox.style.display = "none";
    }else{
        message.innerHTML = "Please check if your zipcode is correct";
        messageBox.style.display = "block";
    }
}

function validateEmail(inputText)
{   var input = document.getElementById('input-email')
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(input.value.match(mailformat))
    {
        validateText('','email','none')
        inputEmail();
    }
    else
    {
        validateText(
            'You have entered an invalid email address!',
            'email',
            'block'
        )
        getID('validate-input-email').style.display = "block";
    }
}

function validateText(text,type,show){
    getID(`validate-input-${type}-text`).innerHTML = `${text}`;
    getID(`validate-input-${type}`).style.display = `${show}`;
}
function validateName(){
    var fname = getID('input-first');
    var lname = getID('input-last');
    if(fname.value == '' || lname.value == ''){
        getID('validate-input-name').style.display = "block";
        getID('validate-input-name-text').innerHTML = "Please fill all the fields"
    }else{
        getID('validate-input-name').style.display = "none";
        getID('validate-input-name-text').innerHTML = ""
        inputName();
    }

}
function validateCity(){
    var city = getID('ziphelp-input-city');
    var state = getID('ziphelp-input-state');
    if(city.value == '' || state.value == ''){
        getID('validate-input-ziphelp').style.display = "block";
        getID('validate-input-ziphelp-text').innerHTML = "Please fill all the fields"
    }else{
        getID('validate-input-ziphelp').style.display = "none";
        getID('validate-input-ziphelp-text').innerHTML = ""
        inputCity();
    }

}

const loadingBar1 = getID('project-loadbar1');
const loadingBar2 = getID('project-loadbar2');
const projectType = getID('project-type');
const projectFlooring = getID('project-flooring');
const projectTiming = getID('project-timing');
const projectEmail = getID('project-email');
const projectName = getID('project-name');
const projectPhone = getID('project-phone');
const projectSecurity = getID('project-security');

function getValue(a){
    return getID(`${a}-value`)
}
function zipHelp(){
    getID('js-ziphelp').style.display = "block"
}
function closeZiphelp(){
    getID('js-ziphelp').style.display = "none"
}

//////////////////BACK
function backButton(a){
    getID(`project-${a}`).style.display = "none"
    if( a == 'type'){
        /* var screen = getValue('screen').innerHTML
        if(screen == 'd'){
            getID('section-home').style.display = "block";
        }
        if(screen == 'm'){
            getID('section-homemobile').style.display = "block";
        } */
        getID('js-homebox').style.display = "block";
    }
    if( a == 'flooring'){
        getID('project-type').style.display = "block";
    }
    if( a == 'timing'){
        getID('project-flooring').style.display = "block";
    }
    if( a == 'email'){
        getID('project-timing').style.display = "block";
    }
    if( a == 'name'){
        getID('project-email').style.display = "block";
    }
    if( a == 'phone'){
        getID('project-name').style.display = "block";
    }
    if( a == 'security'){
        getID('project-phone').style.display = "block";
    }
}
///////////////////////
function displayOffOn(off,on){
    getID(`${off}`).style.display = "none";
    getID(`${on}`).style.display = "block";
}
function loading1(){
    var count = getID('loadbar1-count').innerHTML
    getID('loadbar1-bar').style.width = `${parseInt(count)+1}%` 
    
    if(count < 60){
        setTimeout(() => {
            getID('loadbar1-bar').style.width = `${count}%`         
            loading1();
            getID('loadbar1-count').innerHTML = parseInt(count) + 1
        }, 10);
    }
    if(count == 60){
        setTimeout(() => {
            loading1();
            getID('loadbar1-count').innerHTML = parseInt(count) + 1;
        }, 600);
    }
    if(count >= 61 && count < 100){
        setTimeout(() => {
            getID('loadbar1-count').innerHTML = parseInt(count) + 1;
            getID('loadbar1-bar').style.width = `${count}%`         
            loading1();
        }, 30);
    }
    if(count >= 100){
        setTimeout(() => {
            displayOffOn('project-loadbar1','project-type');
            setTimeout(() => {
                loading1Reset();
            }, 10);
        }, 400);
    }
    
}
function loading1Reset(){
    getID('loadbar1-bar').style.width = '0%';
    getID('loadbar1-count').innerHTML = "0"
}
function loading2(){
    var count = getID('loadingbar2-count').innerHTML
    projectTiming.style.display = "none";
    loadingBar2.style.display = "block";
    if(count < 41){
        getID('loadingbar2-text').innerHTML = "Calculating Quotes ...";
        getID('loadbar2-bar').style.width = `${parseInt(count)}%`;
        getID('loadingbar2-count').innerHTML = parseInt(count) + 1
        setTimeout(() => {
            loading2();
        }, 40); 
    }
    if(count == 41){
        getID('loadingbar2-text').innerHTML = "Finding a installer ...";
        setTimeout(() => {
            getID('loadbar2-bar').style.width = `${parseInt(count)}%`
            getID('loadingbar2-count').innerHTML = parseInt(count) + 1
            setTimeout(() => {
                loading2();
            }, 50); 
        }, 500);
    }
    if(count >= 42 && count < 80){
        getID('loadbar2-bar').style.width = `${parseInt(count)}%`
        getID('loadingbar2-count').innerHTML = parseInt(count) + 1
        setTimeout(() => {
            loading2();
        }, 20); 
    }
    if(count == 80){
        setTimeout(() => {
            getID('loadbar2-bar').style.width = `${parseInt(count)}%`
            getID('loadingbar2-count').innerHTML = parseInt(count) + 1
            setTimeout(() => {
                loading2();
            }, 50); 
        }, 500);
    }
    if(count >= 81 && count < 100){
        getID('loadbar2-bar').style.width = `${parseInt(count)}%`
        getID('loadingbar2-count').innerHTML = parseInt(count) + 1
        setTimeout(() => {
            loading2();
        }, 40); 
    }
    if(count == 100){
        setTimeout(() => {
            displayOffOn('loadingbar2-search','loadingbar2-completed');
            setTimeout(() => {
                displayOffOn('project-loadbar2','project-email');
                setTimeout(() => {
                    loading2Reset();                    
                }, 10);
            }, 1400);
        }, 300);
    }
}
function loading2Reset(){
    getID('loadingbar2-text').innerHTML = "Calculating Quotes ...";
    getID('loadbar2-bar').style.width = `0%`;
    getID('loadingbar2-count').innerHTML = 0;
    getID('loadingbar2-search').style.display = "block";
    getID('loadingbar2-completed').style.display = "none";

}
//////////////
function zipcodeMobile(){
    getValue('zipcode').innerHTML = getID('zipcode-input-mobile').value;
    displayOffOn('js-homebox','project-loadbar1');
    loading1();
}
function zipcodeDesktop(){
    getValue('zipcode').innerHTML = getID('js-zipcode-input-desktop').value;
    displayOffOn('js-homebox','project-loadbar1');
    loading1();
}
function inputCity(){
    var city = getID('ziphelp-input-city');
    var state = getID('ziphelp-input-state');
    getValue('city').innerHTML = city.value;
    getValue('state').innerHTML = state.value;
    displayOffOn('js-homebox','project-loadbar1');
    getID('js-ziphelp').style.display = "none";
    loading1();
}
//////////////
function inputType(n){
    getValue('type').innerHTML = getID(`project-type-input-${n}`).innerHTML;
    displayOffOn('project-type','project-flooring');
    if(n != 1){
        getID('project-input2-6').style.display = "none"
    }else{
        getID('project-input2-6').style.display = "block"
    }
}
//////////////
function inputFlooring(n){
    getID(`project-input2-circle-img-${n}`).style.display = "block";
    getID(`project-input2-${n}`).style.backgroundColor = "#ce6a00";
    getID(`project-input2-${n}`).style.color = "#fff";

    getValue('floor').innerHTML = getID(`project-floor-input-${n}`).innerHTML;
    for(i=1;i<=6;i++){
        if(i==n){continue;}
        getID(`project-input2-circle-img-${i}`).style.display = "none";
        getID(`project-input2-${i}`).style.backgroundColor = "#fff";
        getID(`project-input2-${i}`).style.color = "#ce6a00";
    }
    setTimeout(() => {
        displayOffOn('project-flooring','project-timing');
    }, 200);
}
function inputFlooringReset(){
    getValue('type').innerHTML = "";
    for(i=1;i<=6;i++){
        getID(`project-input2-circle-img-${i}`).style.display = "none";
        getID(`project-input2-${i}`).style.backgroundColor = "#fff";
        getID(`project-input2-${i}`).style.color = "#ce6a00";
    }
}
//////////////
function inputTiming(n){
    getValue('timing').innerHTML = getID(`project-timing-input-${n}`).innerHTML;
    loading2();
}
//////////////
function inputEmail(){
    getValue('email').innerHTML = getID(`input-email`).value;
    displayOffOn('project-email','project-name')
}
//////////////
function inputName(){
    getValue('firstname').innerHTML = getID(`input-first`).value;
    getValue('lastname').innerHTML = getID(`input-last`).value;
    displayOffOn('project-name','project-phone')
}
///////////////
function inputPhone(){
    var resp = document.getElementById('resp');
    settingMyForm();
    document.getElementById('validate-input-recaptcha').style.display = "none";
    document.getElementById('validate-input-recaptcha-text').innerHTML = "";
    if(resp.innerHTML != ''){
        document.getElementById('validate-input-recaptcha').style.display = "none";
        document.getElementById('validate-input-recaptcha-text').innerHTML = "";
        thanksPage();
    }else{
        document.getElementById('validate-input-recaptcha').style.display = "block";
        document.getElementById('validate-input-recaptcha-text').innerHTML = "Please press the reCAPTCHA button";
    }
}
function settingMyForm(){
    getID('phone-value').innerHTML = getID('input-phone').value
    getID('number-thanks').innerHTML = getID('confirmation-number').innerHTML

    var spanConfirm = getID('confirmation-number')
    var spanZipcode = getID('zipcode-value')
    var spanCity = getID('city-value')
    var spanState = getID('state-value')
    var spanType = getID('type-value')
    var spanFloor = getID('floor-value')
    var spanTiming = getID('timing-value')
    var spanEmail = getID('email-value')
    var spanFirstName = getID('firstname-value')
    var spanLastName = getID('lastname-value')
    var spanPhone = getID('phone-value')


    getID('confirmation-siteform').value = spanConfirm.innerHTML
    getID('zipcode-siteform').value = spanZipcode.innerHTML
    getID('city-siteform').value = spanCity.innerHTML
    getID('state-siteform').value = spanState.innerHTML
    getID('type-siteform').value = spanType.innerHTML
    getID('floor-siteform').value = spanFloor.innerHTML
    getID('timing-siteform').value = spanTiming.innerHTML
    getID('email-siteform').value = spanEmail.innerHTML
    getID('firstname-siteform').value = spanFirstName.innerHTML
    getID('lastname-siteform').value = spanLastName.innerHTML
    getID('phone-siteform').value = spanPhone.innerHTML

}
function thanksPage(){
    displayOffOn('project-phone','project-thanks');

    var formData = {
        getConfirm: $('#confirmation-siteform').val(),
        getZipcode: $('#zipcode-siteform').val(),
        getCity: $('#city-siteform').val(),
        getState: $('#state-siteform').val(),
        getType: $('#type-siteform').val(),
        getFloor: $('#floor-siteform').val(),
        getTiming: $('#timing-siteform').val(),
        getEmail: $('#email-siteform').val(),
        getFirstName: $('#firstname-siteform').val(),
        getLastName: $('#lastname-siteform').val(),
        getPhone: $('#phone-siteform').val()
    }

    console.log(formData)
    $.ajax({
        type: "POST",
        url: "includes/email_form.php",
        data: $('#siteform').serialize(),
        success: function(result){
            console.log(result);
            displayOffOn('project-phone','project-thanks');
        }
      });
      $.ajax({
        type: "POST",
        url: "includes/email_form2.php",
        data: $('#siteform').serialize(),
        success: function(result){
            console.log(result);
            displayOffOn('project-phone','project-thanks');
        }
      });

}









/*
$.ajax({
  type: "POST",
  url: "serverUrl",
  data: formData,
  success: function(){},
  dataType: "json",
  contentType : "application/json"
});
*/





















/* var zipcodeValue = getID('zc-value').innerHTML;
var cityValue = getID('ct-value').innerHTML;
var typeValue = getID('tp-value').innerHTML;
var flooringValue = getID('fl-value').innerHTML;
var timingValue = getID('tm-value').innerHTML;
var emailValue = getID('em-value').innerHTML;
var firstNameValue = getID('ft-value').innerHTML;
var lastNameValue = getID('ln-value').innerHTML;
var phoneValue = getID('pn-value').innerHTML; */