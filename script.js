
// shamsi date

var d = new Date();
var time = new Intl.DateTimeFormat('fa-IR').format(d);
const elements = document.querySelectorAll('.time');
let html = '';
for (let i = 0; i < elements.length; i++) {
    html += elements[i].innerHTML = time;
}


// dropdown 

$("li.dropdown-nav").hover(function () {
    $(this).children("ul.dropdown-group").css({ "display": "block" });

}, function () {
    $(this).children("ul.dropdown-group").css({ "display": "none" });
});



// random category number 

var random;
random = Math.floor(Math.random() * 11);
let arrNode = document.querySelectorAll(".category");

for (let i = 0; i < arrNode.length; i++) {
    arrNode[i].innerHTML = Math.floor(Math.random() * 11);
}



// random words number 

var myArray;
myArray = ["کلمه ۱", "کلمه ۲", "کلمه ۳", "کلمه ۴", "کلمه ۵"];
let word = document.querySelectorAll(".key");

function getRandomWord() {
    var randomIndex = Math.floor(Math.random() * myArray.length);
    return word[randomIndex];
}

for (let i = 0; i < word.length; i++) {
    word[i].innerHTML = myArray[Math.floor(Math.random() * myArray.length)];
}



// getting the number of the comments 

const myDiv = document.querySelector('#num-comment');

const myElements = myDiv.querySelectorAll('.my-comment');

const countTag = document.createElement('p');
countTag.textContent = myElements.length;
document.body.appendChild(countTag);




// scroll bar 

$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPercent = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;
        $("#scrollbar").css("width", scrollPercent + "%");
    });
});


// captcha  generator 

function generateCaptcha() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var captchaLength = 6;
    let captcha = "";
    for (var i = 0; i < captchaLength; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
}

var captcha = generateCaptcha();
// $('#captcha').val(captcha);
$(".sshh").text(captcha);
$('form.comment').submit(function (event) {
    event.preventDefault();
    if ($('#captcha').val() === captcha) {
        // captcha code is correct, submit the form
        $(this).unbind('submit').submit();
    } else {
        // captcha code is incorrect, display an error message
        alert('The captcha code you entered is incorrect. Please try again.');
        // captcha ="";
        // $('#captcha').val(captcha);
    }
});



// password and email authentication 

function validateForm() {
    let phonenum;
    if (document.getElementById("number-phone")) {
        phonenum = document.getElementById("number-phone").value;
    }

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields");
        return false;
    }

    if (phonenum) {
        if (phonenum === '') {
            alert("Please fill in all fields");
            return false;
        }
    }

    // اعتبار سنجی ایمیل

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address");
        return false;
    }

    // اعتبار سنجی شماره موبایل 

    if (phonenum) {
        const phoneRegex = "0123456789";
        if (!phonenum.match(phoneRegex)) {
            alert("please enter a valid phone number, phone number must be at least 11 characters long ")
            return false;
        }
    }

    // اعتبار سنجی رمز عبور

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!password.match(passwordRegex)) {
        alert("Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one number");
        return false;
    }

    var input1 = $(".input1").val();
    var input2 = $(".input2").val();
    if (input1 !== input2) {
        alert("your passwords  dosent match ");
        return false;
    }

    // اعتبار سنجی موفقیت آمیز بود

    alert("Validation successful!");
    return true;
}

function validatecomment() {
    const name = document.getElementById("name").value;
    const cemail = document.getElementById("cemail").value;
    const ccaptcha = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
    if (name === "" || cemail === "" || ccaptcha === "" || comment === "") {
        alert("Please fill in all fields");
        return false;
    }
    // اعتبار سنجی ایمیل
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!cemail.match(emailRegex)) {
        alert("Please enter a valid email address");
        return false;
    }
    const nameRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!name.match(nameRegex)) {
        alert("please enter a valid name ")
        return false;
    }
}

var splide = new Splide('.splide', {
    type: 'loop',
    focus: 'center',
    autoplay: true,
});
splide.mount();


/* search bar  */
// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if (userData) {
        icon.onclick = () => {
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data) => {
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

icon.onclick = () => {
    webLink = `https://www.google.com/search?q=${userData}`;
    linkTag.setAttribute("href", webLink);
    linkTag.click();
}

emptyArray = suggestions.filter((data) => {
    //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
    return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
});
emptyArray = emptyArray.map((data) => {
    // passing return data inside li tag
    return data = `<li>${data}</li>`;
});

searchWrapper.classList.add("active"); //show autocomplete box
showSuggestions(emptyArray);
let allList = suggBox.querySelectorAll("li");
for (let i = 0; i < allList.length; i++) {
    //adding onclick attribute in all li tag
    allList[i].setAttribute("onclick", "select(this)");
}

searchWrapper.classList.remove("active"); //hide autocomplete box

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
