console.log("Registration");

let msg = document.querySelector(".msg_wrap");
let wrap = document.querySelector(".msg_wrap_message");
let welcome_page = document.querySelector(".welcome");
let reg_button = document.querySelector(".reg_button");
let aut_button = document.querySelector(".aut_button");
let form = document.forms[0];
let a_form = document.forms[1];
let pub_form = document.forms[2];
var pub_container = document.querySelector(".pub_container");

function getCookie(name) {
    var arr = document.cookie.split('; ');
    for (var i = 0; i < arr.length; i++) {
        var subarr = arr[i].split('=');
        if (subarr[0] == name) {
            return subarr[1];
        }
    }
    return 0;
}


function getTables() {
    var xmlhttp = new XMLHttpRequest();
    var res;
    xmlhttp.onload = function () {
        console.log(this.responseText);
        res = JSON.parse(this.responseText);
        res.forEach((item) => console.log(item));

        pub_container.innerHTML = "";

        res.forEach((item) => {
            if (item.pub_table != "") {
                pub_container.insertAdjacentHTML('beforeEnd', `
                    <div class="main_item">
    		            <a class="pub_table" href="#">${item.pub_table}</a>
    	            </div>
                `);
            }

        });

    }
    xmlhttp.open("GET", "db_handler.php?tables=1");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}



document.querySelector(".reg_back").addEventListener("click", () => {
    welcome_page.classList.remove("unvisible");
    welcome_page.classList.add("welcome");
    form.classList.remove("reg_form");
    form.classList.add("unvisible");
});

document.querySelector(".aut_back").addEventListener("click", () => {
    welcome_page.classList.remove("unvisible");
    welcome_page.classList.add("welcome");
    a_form.classList.remove("aut_form");
    a_form.classList.add("unvisible");
});


welcome_page.addEventListener("click", (e) => {

    if (e.target == reg_button) {
        console.log("Reg");
        welcome_page.classList.add("unvisible");
        welcome_page.classList.remove("welcome");
        form.classList.add("reg_form");
        form.classList.remove("unvisible");
    }
    if (e.target == aut_button) {
        console.log("Aut");
        welcome_page.classList.add("unvisible");
        welcome_page.classList.remove("welcome");
        a_form.classList.add("aut_form");
        a_form.classList.remove("unvisible");
    }

});

form.addEventListener('input', () => {

    if (form.name.value == "") {
        console.log(form.name.nextElementSibling);
        form.name.nextElementSibling.classList.remove("green");
        form.name.nextElementSibling.classList.add("red");
    } else {
        form.name.nextElementSibling.classList.remove("red");
        form.name.nextElementSibling.classList.add("green");
    }
    if (form.password.value == "") {
        form.password.nextElementSibling.classList.remove("green");
        form.password.nextElementSibling.classList.add("red");
    } else {
        form.password.nextElementSibling.classList.remove("red");
        form.password.nextElementSibling.classList.add("green");
    }
    if ((form.r_password.value == "")||(form.r_password.value != form.password.value)) {
        form.r_password.nextElementSibling.classList.remove("green");
        form.r_password.nextElementSibling.classList.add("red");
    } else {
        form.r_password.nextElementSibling.classList.remove("red");
        form.r_password.nextElementSibling.classList.add("green");
    }
    console.log("inside Form");
});


form.addEventListener('click', (e) => {
    var n = false, p = false, r_p = false;
    if (form.name.value == "") {
        console.log(form.name.nextElementSibling);
        form.name.nextElementSibling.classList.remove("green");
        form.name.nextElementSibling.classList.add("red");
        n = false;
    } else {
        form.name.nextElementSibling.classList.remove("red");
        form.name.nextElementSibling.classList.add("green");
        n = true;
    }
    if (form.password.value == "") {
        form.password.nextElementSibling.classList.remove("green");
        form.password.nextElementSibling.classList.add("red");
        p = false;
    } else {
        form.password.nextElementSibling.classList.remove("red");
        form.password.nextElementSibling.classList.add("green");
        p = true;
    }
    if ((form.r_password.value == "") || (form.r_password.value != form.password.value)) {
        form.r_password.nextElementSibling.classList.remove("green");
        form.r_password.nextElementSibling.classList.add("red");
        r_p = false;
    } else {
        form.r_password.nextElementSibling.classList.remove("red");
        form.r_password.nextElementSibling.classList.add("green");
        r_p = true;
    }

    if ((e.target == form.button)&&p&&n&&r_p) {
        console.log("Send");


        const data = {
            "name": form.name.value,
            "email": form.email.value,
            "password": form.password.value,
        };
        const dbParam = JSON.stringify(data);
        var xmlhttp = new XMLHttpRequest();
        var res = "";

        console.log(dbParam);
        xmlhttp.onload = function () {
            console.log(this.responseText);
            res = this.responseText;
            if (res == "error") {
                form.name.nextElementSibling.classList.remove("green");
                form.name.nextElementSibling.classList.add("red");
                n = false;
            } else {
                form.classList.remove("reg_form");
                form.classList.add("unvisible");
                msg.classList.add("unvisible");
                msg.classList.remove("welcome_wrap");

                console.log(res);
                document.cookie = 'name=' + res;
                getTables();
                document.querySelector(".header_top_info_name").textContent = res;
            }
        }
        xmlhttp.open("POST", "db_handler.php");
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("form="+dbParam);
    }

    e.preventDefault();

    console.log("inside Form");
});



a_form.addEventListener('click', (e) => {

    if (e.target == a_form.button) {
        console.log("Send");

        const data = {
            "name": a_form.name.value,
            "password": a_form.password.value,
        };
        const dbParam = JSON.stringify(data);
        var xmlhttp = new XMLHttpRequest();
        var res = "";

        console.log(dbParam);
        xmlhttp.onload = function () {
            console.log(this.responseText);
            res = this.responseText;
            if (res == "error") {
                console.log(res);
            } else {
                a_form.classList.remove("aut_form");
                a_form.classList.add("unvisible");
                msg.classList.add("unvisible");
                msg.classList.remove("welcome_wrap");
                console.log(res);
                document.cookie = 'name=' + res;
                getTables();
                document.querySelector(".header_top_info_name").textContent = res;
            }
        }
        xmlhttp.open("POST", "db_handler.php");
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("a_form=" + dbParam);
    }

    e.preventDefault();

    console.log("inside Form");
});




document.querySelector(".publish").addEventListener("click", () => {
    pub_form.classList.add("pub_form");
    pub_form.classList.remove("unvisible");
    msg.classList.add("welcome_wrap");
    msg.classList.remove("unvisible");
});



pub_form.addEventListener("click", (e) => {
    if (e.target == pub_form.button) {
        const data = {
            "name": getCookie("name"),
            "min": pub_form.min.value,
            "max": pub_form.max.value,
            "units":pub_form.units.value
        };
        const dbParam = JSON.stringify(data);
        var xmlhttp = new XMLHttpRequest();
        var res = "error";

        console.log(dbParam);
        xmlhttp.onload = function () {
            console.log(this.responseText);
            res = this.responseText;
            pub_form.classList.remove("pub_form");
            pub_form.classList.add("unvisible");
            wrap.querySelector(".msg").innerHTML = `Now you are publisher! Your link is <br>${res}`;

            wrap.classList.add("wrap");
            wrap.classList.remove("unvisible");
        }
        xmlhttp.open("POST", "db_handler.php");
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("publish=" + dbParam);
    }

    e.preventDefault();
});

//var arr;
//var accessories;

//var pub_container = document.querySelector(".main_pub");
//pub_container.addEventListener("click", (e) => {
//    console.log(e.target);
//    console.log(e.target.textContent);
//    var table = e.target.textContent;
//    var name = table.slice(0, -9);
//    console.log(name);
//    var xmlhttp = new XMLHttpRequest();
    
//    xmlhttp.onload = function () {
//        console.log(this.responseText);
//        accessories = JSON.parse(this.responseText);
//        console.log(accessories);
//    }
//    xmlhttp.open("GET", "db_handler.php?accessories=" + name);
//    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//    xmlhttp.send();

//    xmlhttp = new XMLHttpRequest();
//    xmlhttp.onload = function () {
//        console.log(this.responseText);
//        arr = JSON.parse(this.responseText);
//        arr.forEach((item) => console.log(item));
//    }
//    xmlhttp.open("GET", "db_handler.php?data=" + table);
//    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//    xmlhttp.send();

//    GlobalFunc();
//});

document.querySelector(".msg_button").addEventListener("click", () => {

    getTables();


    wrap.classList.remove("wrap");
    wrap.classList.add("unvisible");
    msg.classList.remove("welcome_wrap");
    msg.classList.add("unvisible");
});