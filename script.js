$(document).ready(function () {
  console.log("Your script is loaded");
  var currentDate = moment().format("dddd MMMM Do [at] LT"); //hh:mm:ss a
  var timeEl = $(".date");
  timeEl.text(currentDate);
  var timerInterval;
  // var containerEl = $(".container");
  // var container = document.querySelector(".container");
  // var blocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  var date = new Date();
  var currentHour = date.getHours();
  console.log(date); //date, hours and minutes
  console.log(currentHour); //give me the hour
  console.log(date + currentHour);
  $(".notification").hide();

  $(".saveBtn").on("click", function (e) {
    var toDo = $(this).siblings(".description").val();  
    var time = $(this).siblings(".hour").text().trim();
    localStorage.setItem(time, toDo);
    $(".notification").show();
    setTimeout(function () {
      $(".notification").hide();
    }, 3000);
  });

  var startTimer = function () {
    timerInterval = setInterval(function () {
      var currentDate = moment().format("dddd MMMM Do [at] LT"); //hh:mm:ss a
      timeEl.text(currentDate);
    }, 1000);
  };
  startTimer();


  $(".hour").each(function () {
    var hourKey = $(this).text().trim();
    console.log(hourKey)
    // var todoValue = localStorage.getItem(hourKey);
    // $(this).siblings(".description").text(todoValue);
    // console.log("TODO STORED", todoValue);
    var appHour = parseInt($(this).text());
    if ($(this).text().includes("PM") && $(this).text().trim() !== "12PM")
      appHour += 12;
    if (appHour < currentHour) {
      //color option is only set to green. check this
      $(this).parent().addClass("past");
      // $(this).parent().removeClass("present");
      // $(this).parent().removeClass("future");
    } else if (appHour === currentHour) {
      $(this).parent().removeClass("past");
      // $(this).parent().removeClass("future");
      $(this).parent().addClass("present");
    } else {
      $(this).parent().removeClass("present");
      $(this).parent().removeClass("past");
      $(this).parent().addClass("future");
    }
  });

  $('.9').val(localStorage.getItem('9AM'))
  $('.10').val(localStorage.getItem('10AM'))
  $('.11').val(localStorage.getItem('11AM'))
  $('.12').val(localStorage.getItem('12PM'))
  $('.1').val(localStorage.getItem('1PM'))
  $('.2').val(localStorage.getItem('2PM'))
  $('.3').val(localStorage.getItem('3PM'))
  $('.4').val(localStorage.getItem('4PM'))
  $('.5').val(localStorage.getItem('5PM'))

  // var htmlVar = document.getElementsByClassName(".hour");
  // var text = htmlVar.textContent;
});
