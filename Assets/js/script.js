d// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.[Complete]

//hours will represent the timie on the calender
//tag is the number we are grabbing to manipulate for past, present, future
//entry will be the text field
var dailySchedule = [
  {
    hours: "7am",
    tag: 7,
    entry: "",
  },

  {
    hours: "8am",
    tag: 8,
    entry: "",
  },

  {
    hours: "9am",
    tag: 9,
    entry: "",
  },

  {
    hours: "10am",
    tag: 10,
    entry: "",
  },

  {
    hours: "11am",
    tag: 11,
    entry: "",
  },

  {
    hours: "12pm",
    tag: 12,
    entry: "",
  },

  {
    hours: "1pm",
    tag: 1,
    entry: "",
  },

  {
    hours: "2pm",
    tag: 2,
    entry: "",
  },

  {
    hours: "3pm",
    tag: 3,
    entry: "",
  }

];



$(document).ready(function () {
loading();
    var dailyplanner = $('#dailyplanner'); 

    $.each(dailySchedule, function(i, thetime){

    dailyplanner.append("div id=\"thetime" + i +"/"" + "class=\"row\"></div>");
$("#thetime"+i).append("<div id=\"timeOf" + i "\"" + "class=\"col-2 hour\">" + thetime.hours + "</div>");
var Hourplan = thetime.tag;

var wibblyWobbly = "";
if (nowTime > Hourplan){
    wibblyWobbly = "past";
}
else if (nowTime == Hourplan){ 
    wibblyWobbly = "present";
}
else if (nowTime < Hourplan) {
    wibblyWobbly = "future";
}

//build out and correct for text area. 12/7/2022
// $("#thetime"+i).append("<div id=\"timeOf" + i "\"" + "class=\"col-2 hour\">" + thetime.hours + "</div>");
// $("#thetime"+i).append("<div id=\"timeOf" + i "\"" + "class=\"col-2 hour\">" + thetime.hours + "</div>");


});
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in local storage.

  // HINT: What does `this` reference in the click listener function?
  // How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked?
  // How might the id be useful when saving the description in local storage?

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.

  // HINTS: How can the id attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes?
  // How can Day.js be used to get the current hour in 24-hour time?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.

  // HINT: How can the id attribute of each time-block be used to do this?

  // TODO: [Complete] Add code to display the current date in the header of the page.
  // $('#currentDay').text(dayjs().format('MMMM DD, YYYY [at] h:mm:ss a'));

  function displayDate() {
    var nowTime = dayjs().format("MMMM DD, YYYY [at] h:mm:ss a");
    timeDisplayEl.text(nowTime);
  }
  displayDate();
  setInterval(displayDate, 1000);

  printDateData();

  //code starting point will need help later
  //adds a the form to local storage and prints the data
  //issues: this did not save to local storage, thinking more of the functions needs definitions

//To be reused at a later time
// var timeDisplayEl = $("#currentDay");
// var nineHourEL = $("#hour-9");
// var tenHourEL = $("#hour-10");
// var elevenHourEL = $("#hour-11");

  //   function dateSubmitForm(event) {
//     event.preventDefault();

    // var hourIX = nineHourEL.val().trim();
    // var hourX = tenHourEL.val().trim();
    // var hourXI = elevenHourEL.val().trim();

    // var planDate = {
    //   text: hourIX,
    // };

    // adds to local storage
    // var store = readDateFromStorage();
    // store.push(planDate);
    // saveDateToStore(store);

    //print project data
//     printDateData();
//   }

//   tenHourEL.on("click", dateSubmitForm);
  //Stuck: see student mini project JS line87 for starting point.
});
