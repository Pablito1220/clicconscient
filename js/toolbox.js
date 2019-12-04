//file containing useful methods to complete basic javascript solutions

//------------------------------------------------------------------------------------------------------------------Math
Math.radians = function (degrees) {
    return degrees * Math.PI / 180;
};

Math.degrees = function (radians) {
    return radians * 180 / Math.PI;
};

Math.lerp = function (value1, value2, amount) {
    amount = amount < 0 ? 0 : amount;
    amount = amount > 1 ? 1 : amount;
    return value1 + (value2 - value1) * amount;
};

Math.map = function (value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
};


Math.distance = function (x1, x2, y1, y2) {
    if (typeof y1 === 'undefined') {
        y1 = 0;
    }
    if (typeof y2 === 'undefined') {
        y2 = 0;
    }
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
};

Math.difference = function (x1, x2) {
    return (Math.sqrt(Math.pow((x2 - x1), 2)));
};


Math.randomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

//-----------------------------------------------------------------------------------------------------------------Color
function rgb(r, g, b) {
    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);
    return ["rgb(", r, ",", g, ",", b, ")"].join("");
}

function rgba(r, g, b, a) {
    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);
    a = Math.floor(a);
    return ["rgba(", r, ",", g, ",", b, ",", a, ")"].join("");
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


//------------------------------------------------------------------------------------------------------------------JSON
function loadJSON(callback, path) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', path, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

//callback function example
// function loadArticlesData() {
//     loadJSON((function (response) {
//         // Parse JSON string into object
//         var articlesData = JSON.parse(response);
//         webSiteData = articlesData;
//     }).bind(this), "./assets/gavar.json");
// }


//get window width or height

// var width = window.innerWidth
//     || document.documentElement.clientWidth
//     || document.body.clientWidth;
//
// var height = window.innerHeight
//     || document.documentElement.clientHeight
//     || document.body.clientHeight;



//get mousePosition

// document.addEventListener("mousemove", function (e) {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
//
//     console.log("x" + mouseX);
// })