// canvas and context variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// graph styling variables
// defining the zero line for this

var rect = canvas.getBoundingClientRect();
var x1 = 10;  // where the line will start on the left

console.log(rect)
var yAxis = rect.height - rect.height/2; // where the line will start
var distanceBetweenPoints = rect.width / 7 ; // this controls the distance between the lines

// an object with the percentage value for each day
var days = {
    Sunday: 0,
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0
}

// each day will have 3 percentage options
var options = [{
    val: 0,
    text: "0%"
}, {
    val: 50,
    text: "50%"
}, {
    val: 100,
    text: "100%"
}, ];

// build the html select elements for each day of the week
for (var dayName in days) {

    var select = $('<select>').attr("id", dayName).addClass("myData").appendTo('#selects');
    $(options).each(function () {
        select.append($("<option>").attr('value', this.val).text(this.text));
    });

};

// listen for change events on the comboboxes
// redraw the graph accordingly
$(".myData").change(function (e) {
    days[this.id] = $(this).val();
    draw();
});

// draw the beginning graph
draw();


function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    var i = 0;
    for (var day in days) {

        var value = days[day];

        if (day == "Sunday") { // first line should just be a move to
            ctx.moveTo(x1 + distanceBetweenPoints * (i++), yAxis - days[day]);
        } else {
            ctx.lineTo(x1 + distanceBetweenPoints * (i++), yAxis - days[day]);
        }

    }
    ctx.stroke();

    var i = 0;
    for (var day in days) {

        var value = days[day];
        ctx.beginPath();
        ctx.arc(x1 + distanceBetweenPoints * (i++), yAxis - value, 4, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

    }

}

function writeMessage(canvas, message) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width,30);
    context.font = '18pt Calibri';
    context.fillStyle = 'black';
    context.fillText(message, 10, 25);
}

function getMousePos(canvas, evt) {
    
    var rect = canvas.getBoundingClientRect();
    
    return {
        x: evt.clientX,
        y: rect.height - evt.clientY
    };
    
}


canvas.addEventListener('click', function (evt) {
    var mousePos = getMousePos(canvas, evt);

    var xpos = mousePos.x;
    // if (xpos < 50 || xpos > 250) {
    //     xpos = 0;
    // } else {
    //     xpos = xpos - 50;
    // }

    var ypos = mousePos.y-30;

    // determine which x point was clicked
    // xpos / number of points offset by start position
    // 7 because there are 7 data points
    // 300 because that is the width of the canvas
    const xPoint = Math.floor(xpos /300 * 7) 

    const dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    console.log("xpos estimate: ", dayArray[xPoint])

    days[dayArray[xPoint]] = ypos;
    draw();
    
    var message = 'Mouse position: ' + xpos + ',' + ypos;
    writeMessage(canvas, message);
}, false);