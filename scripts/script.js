const canvas = document.getElementById('mycanvas');

var pub_container = document.querySelector(".main_pub");
let graph = document.querySelector(".graph");
let width = graph.clientWidth - 40;
let height = width / 2;
var intervalIndex = 0;
var target;
canvas.width = width;
canvas.height = height;
console.log(width + " " + height);
const ctx = canvas.getContext('2d');





function Point(x, y) {
    this.x = x;
    this.y = y;
}

function zone(x,y,w,h,color) {
    this.y = y;
    this.x = x;
    this.w = w;
    this.h = h;
    this.color = color;

    this.draw = function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}


function axe(h,w,units) {
    this.h = h;
    this.w = w;
    this.units = units;

    this.draw = function () {

        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, this.h);
        ctx.lineTo(this.w, this.h);
        ctx.closePath();
        ctx.stroke();

        //console.log(this.w+" "+this.h);

        ctx.fillStyle = 'white';
        ctx.fillText(this.units, 0, this.h+20);
    }
}


function schema(accessories) {

    this.width = canvas.width;
    this.height = canvas.height;
    this.zones_cnt = 10;
    this.thick = this.height / this.zones_cnt;
    this.midle = this.height / 2;
    this.color_step = Math.round(255 / this.zones_cnt);

    this.per_gradus = this.height / 2 / 50;
    this.per_time = 1;
    this.min = accessories.min;
    this.max = accessories.max;
    this.units = accessories.units;
    this.tenPercent = (this.max - this.min) * 0.1;
    this.px = this.height / (this.max - this.min + 2*this.tenPercent);
    this.zero_level = 0;
    this.max_level = 0;
    this.min_level = 0;
    this.axes = new Array();


    if ((this.min < 0) && (this.max > 0)) {
        this.zero_level = (this.max + this.tenPercent) * this.px;
        this.axes.push(new axe(this.zero_level, this.width, this.units));
        this.max_level = this.zero_level - this.max * this.px;
        this.axes.push(new axe(this.max_level, this.width, this.units));
        this.min_level = this.zero_level - this.min * this.px;
        this.axes.push(new axe(this.min_level, this.width, this.units));
        
    } else {
        this.zero_level = this.height - this.tenPercent * this.px;
        this.axes.push(new axe(this.zero_level, this.width, this.units));
        this.max_level = this.zero_level - (this.max - this.min) * this.px;
        this.axes.push(new axe(this.max_level, this.width, this.units));
    }
        
    this.zones = new Array();
    for (var i = 0; i < this.height; i += this.thick) {
        this.zones.push(new zone(0, this.height - i, this.width, this.thick, 'rgb(' + (0 + this.color_step * (i / this.thick)) +',87,'+(255 - this.color_step * (i / this.thick))+')'));
    }

    this.draw = function () {
        this.zones.forEach((item) => item.draw());
        this.axes.forEach((item) => item.draw());
    }

}


function graph_fun(arr, zero) {
    console.log(zero);
    this.pixels = new Array();
    var sum = arr[arr.length-1].datetime-arr[0].datetime;
    var ethalon = arr[0].datetime,step =0,t_temp = 0, v_temp = 0, cnt = 0, j = 0;

    if (arr.length > canvas.width) {
        step = sum / canvas.width;
        t_temp = step;
        for (var i = 0; i < arr.length; i++) {

            if (t_temp > (arr[i].datetime - ethalon)){
                v_temp += arr[i].x;
                cnt++;
            } else {
                t_temp += step;

                this.pixels.push(new Point(j, Math.round(-(v_temp / cnt) + zero)));
                j += 1;
               
                v_temp = arr[i].x;
                cnt = 1;
            }
        }
    } else {
        step = canvas.width / sum;
        for (var i = 0; i < arr.length; i++) {
            this.pixels.push(new Point(Math.round((arr[i].datetime - ethalon) * step), Math.round(-arr[i].x + zero)));
        }
    }
    //this.pixels.forEach((item) => console.log(item.x + " " + item.y));

    this.draw = function () {

        ctx.fillStyle = "rgb(255,255,255)";
        this.pixels.forEach((item) => ctx.fillRect(item.x, item.y, 5, 5));

        ctx.strokeStyle = "rgb(255,255,255)";
        ctx.beginPath();
        ctx.moveTo(this.pixels[0].x, this.pixels[0].y);
        this.pixels.forEach((item) => ctx.lineTo(item.x, item.y));
        ctx.stroke();
    }

}

//function mark(x,y,datetime,id) {
//    MyPoint.apply(this, arguments);
//    this.datetime = datetime;
//    this.id = id;
//}


//var res = 0;

//function graph() {
//    this.arr = new Array();
//    this.cnt = 0;
//    //for (var i = 0; i < canvas.width; i += 6) {
//    //    this.arr.push(new mark(i, 20 + Math.random() * 160, "time",i));
//    //}
//    this.arr.push(new mark(this.cnt, 0, "time", 150));
//    this.cnt++;

//    this.getData = function () {
//        const limit = { "id": this.arr[this.arr.length-1].id+1 };
//        const dbParam = JSON.stringify(limit);
//        var xmlhttp = new XMLHttpRequest();
//        xmlhttp.onload = function () {
//            console.log(this.responseText);
//            res=JSON.parse(this.responseText);

//        }
//        xmlhttp.open("GET", "db_handler.php?id=" + dbParam);
//        xmlhttp.send();
//    }

//    this.addData = function () {
//        this.arr.push(new mark(this.cnt, res.x, res.datetime, res.id));
//        this.cnt++;
//    }


//    this.draw = function (midle) {
//        ctx.fillStyle = 'rgb(0,255,0)';
//        ctx.beginPath();
//        ctx.moveTo(this.arr[0].x, this.arr[0].y+midle);
//        this.arr.forEach((item) => ctx.lineTo(item.x, item.y+midle));
//        //ctx.closePath();
//        ctx.stroke();
//    }
//}






//let myschema = new schema(canvas.width, canvas.height);
//let mygraph = new graph();
//function GlobalFunc() {
//    myschema.draw();

//    mygraph.getData();
//    mygraph.addData();
//    mygraph.arr.forEach((item) => console.log(item));
//    mygraph.draw(myschema.midle);
//}


//var intervalIndex=setInterval(GlobalFunc, 5000);





//let myschema;


function GlobalFunc() {

    var table = target;
    var name = table.slice(0, -9);
    console.log(name);
    var xmlhttp = new XMLHttpRequest();
    var accessories;
    xmlhttp.onload = function () {
        console.log(this.responseText);
        accessories = JSON.parse(this.responseText);
        console.log(accessories);
    }
    xmlhttp.open("GET", "db_handler.php?accessories=" + name);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();

    console.log(accessories);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        console.log(this.responseText);
        var arr = JSON.parse(this.responseText);
        arr.forEach((item) => console.log(item));
        let myschema = new schema(accessories);
        let mygraph = new graph_fun(arr, myschema.zero_level);
        myschema.draw();
        mygraph.draw();
        //GlobalFunc();
    }
    xmlhttp.open("GET", "db_handler.php?data=" + table);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}

//GlobalFunc();

window.addEventListener('resize', (e) => {
    console.log("Resize");
    console.log(e);
    width = graph.clientWidth - 40;
    height = width / 2;
    console.log(width + " " + height);
    canvas.width = width;
    canvas.height = height;
    GlobalFunc();
});


document.querySelector(".live").addEventListener("click", () => {
    console.log(intervalIndex);
    if (intervalIndex!=0) {
        clearInterval(intervalIndex);
        intervalIndex = 0;
    } else {
        intervalIndex= setInterval(GlobalFunc, 5000);
    }
});

//var table;

document.querySelector(".data").addEventListener("click", () => {
    
});



pub_container.addEventListener("click", (e) => {
    console.log(e.target);
    console.log(e.target.textContent);
    target = e.target.textContent;
    GlobalFunc();
    //console.log(e.target);
    //console.log(e.target.textContent);
    //var table = e.target.textContent;
    //var name = table.slice(0, -9);
    //console.log(name);
    //var xmlhttp = new XMLHttpRequest();
    //var accessories;
    //xmlhttp.onload = function () {
    //    console.log(this.responseText);
    //    accessories = JSON.parse(this.responseText);
    //    console.log(accessories);
    //}
    //xmlhttp.open("GET", "db_handler.php?accessories=" + name);
    //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xmlhttp.send();    

    //console.log(accessories);

    //xmlhttp = new XMLHttpRequest();
    //xmlhttp.onload = function () {
    //    console.log(this.responseText);
    //    var arr = JSON.parse(this.responseText);
    //    arr.forEach((item) => console.log(item));
    //    let myschema = new schema(accessories);
    //    let mygraph = new graph_fun(arr, myschema.zero_level);
    //    myschema.draw();
    //    mygraph.draw();
    //    //GlobalFunc();
    //}
    //xmlhttp.open("GET", "db_handler.php?data=" + table);
    //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xmlhttp.send();
});






