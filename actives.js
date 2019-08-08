function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}



// Set the date we're counting down to
var countDownDate = new Date("September 25, 2019 19:30:25").getTime();


var x = setInterval(function () {


    var now = new Date().getTime();


    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


function weryfikacja() {
    var wiek = parseInt(document.forms['register-form']['age'].value);

    if (isNaN(wiek)) {
        alert("Nie podales wieku!");
        return false;
    }
    if (wiek < 18) {
        alert("Jestes nie pelnoletni");
        return false;
    } else {
        var imie = document.forms['form1']['name'].value;
        alert("Witaj: " + name);
    }
}

function logowanie() {
    var nickElem = document.forms['login']['nazwa'];
    var passElem = document.forms['login']['haslo'];
    if (nickElem.value.length < 3) {
        nickElem.style.backgroundColor = "red";

        setTimeout(function () {
            nickElem.style.backgroundColor = "white";
        }, 500); //500ms = 0.5s

        return false;
    }

    if (passElem.value.length < 6) {
        passElem.style.backgroundColor = "red";
        setTimeout(function () {
            passElem.style.backgroundColor = "white";
        }, 500); //500ms = 0.5s
        return false;
    }
}

//alert(document.getElementById("jeden").children[2].value);
// function weryfikacja(){
//     var age = parseInt( document.forms['form1']['age'].value );
//
//     if( isNaN(age) ){
//         alert("You didn't enter the age!");
//         return false;
//     }
//     if( age < 18 ){
//         alert("You are underage :(");
//         return false;
//     }
// if( age > 99){
//     alert("error");
// } else {
//         var name = document.forms['form1']['name'].value;
//         alert("Witaj: " + name);
//     }
// }
// //
// function logowanie(){
//     var nickElem = document.forms['login']['nazwa'];
//     var passElem = document.forms['login']['haslo'];
//     if(nickElem.value.length < 3 ){
//         nickElem.style.backgroundColor = "red";
//
//         setTimeout( function(){
//             nickElem.style.backgroundColor = "white";
//         }, 500); //500ms = 0.5s
//
//         return false;
//     }
//
//     if(passElem.value.length < 6 ){
//         passElem.style.backgroundColor = "red";
//         setTimeout( function(){
//             passElem.style.backgroundColor = "white";
//         }, 500); //500ms = 0.5s
//         return false;
//     }
// }

function store() {
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');

    localStorage.setItem('name', name.value);
    localStorage.setItem('pw', pw.value);

}

function check() {

    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName').value;
    var userPw = document.getElementById('userPw').value;

    console.log(storedName + " storedName");
    console.log(storedPw + " storedPw");
    console.log(userName + " userName");
    console.log(userPw + " userPw");
    let valueUserName = userName.value;
    console.log(typeof valueUserName);
    if (userName === storedName && userPw === storedPw) {
        alert('You are loged in.');
    } else {
        alert('ERROR.');
    }
}

