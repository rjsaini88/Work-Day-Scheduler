console.log("Your script is loaded");
var timeEl = $(".date");
var timerInterval;
// var containerEl = $(".container");
var container = document.querySelector(".container");
var blocks = [9,10,11,12,13,14,15,16,17];
var date = new Date();

// function currentHour(hour){
//     if (date.getHours() === hour) {
//         return 1}
//         else if (date.getHours() > hour){
//             return 2}
// else {return 3}
//         }

// for (var i = 0; i < blocks.length; i++){
//     var wrapper = document.createElement("div");
//     wrapper.setAttribute ("class", "row timeblock");
//     if (currentHour(blocks[i]) ===1) {
//         wrapper.classList.add("present");
//     }else if (currentHour(blocks[i]) === 2){
//         wrapper.classList.add("past");}
//     else {
//         wrapper.classList.add("future");
//     }
    
//     var block = document.createElement("div");
//     var textbox = document.createElement("textarea");
//     textbox.setAttribute ("style", "flex-grow: 1; height:100px;");
//     block.textContent = moment(blocks[i], 'HH').format('h a');
//     wrapper.appendChild(block);
//     wrapper.appendChild(textbox);
//     container.appendChild(wrapper);
// }



var startTimer = function() {
    timerInterval = setInterval(function() {
//this function gets called every second.
//get the date time string every second and put on page. 

var currentDate = moment().format('dddd MMMM Do [at] LT'); //hh:mm:ss a
timeEl.text(currentDate);
        },1000);
    };
    startTimer();


