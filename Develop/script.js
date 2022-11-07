$(document).ready(function () {
  console.log("Your script is loaded");
  var timeEl = $(".date");
  var timerInterval;
  // var containerEl = $(".container");
  var container = document.querySelector(".container");
  var blocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  var date = new Date();
  var currentHour = date.getHours() % 12 || 12;
  console.log(date); //date, hours and minutes
  console.log(currentHour); //give me the hour
  console.log(date + currentHour);
  $(".notification").hide();

  $("saveBtn").on("click", function (e) {
    // question on save to localstorage and
    // e.preventDefault();
    var toDo = $(".description").value();
    var time = $(".hour").text();
    localStorage.setItem(time, toDo);
    console.log(time);
    setTimeout(function () {
      $(".notification").show(); //question on how to make this function work on click. display for 5 seconds
    }, 5000);
  });

  var startTimer = function () {
    timerInterval = setInterval(function () {
      //this function gets called every second.
      //get the date time string every second and put on page.

      var currentDate = moment().format("dddd MMMM Do [at] LT"); //hh:mm:ss a
      timeEl.text(currentDate);
    }, 1000);
  };
  startTimer();

  var appHour = parseInt($(".hour").text());
  console.log(appHour);

  console.log(parseInt($(".hour").text()));

  $(".hour").each(function () {
    var appHour = parseInt($(this).text());
    console.log(appHour);

    if (appHour < currentHour) {    //color option is only set to green. check this
      $(".time-block").addClass("past");
    } else if (appHour === currentHour) {
      $(".time-block").removeClass("past");
      $(".time-block").addClass("present");
    } else {
      $(".time-block").removeClass("present");
      $(".time-block").removeClass("past");
      $(".time-block").addClass("future");
    }
  });
  var htmlVar = document.getElementsByClassName(".hour");
  var text = htmlVar.textContent;

  //   for (var i = 0; i < text.length; i++) {
  //     console.log(text[i])

  /*GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar - done
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours - done
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/
});
