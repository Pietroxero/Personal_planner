// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
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

function displayDate() {
    var nowTime = dayjs().format("MMMM DD, YYYY [at] h:mm:ss a");
    $("#currentDay").text(nowTime);
  }
  displayDate();
  setInterval(displayDate, 1000);
  
  function save(event) {
    let hour = event.target.getAttribute("data-hour");
    let input = $(`textarea[data-hour="${hour}"]`);
    console.log(input.val());
    for ( let i = 0; i <dailySchedule.length; i++){
        if(dailySchedule[i].tag ==hour){
            dailySchedule[i].entry = input.val();
        }
    }
    //save to locale storage loop
  }
  
  function createSchedule() {
    for (let i = 0; i < dailySchedule.length; i++) {
      // Create the table row
      let row = $("<div>");
      row.addClass("row");
  
      // create the row elements
      let div = $("<div>");
      div.addClass("col-2 col-md-1 hour text-center py-3");
      div.text(dailySchedule[i].hours);
  
      let textbox = $("<textarea>");
      textbox.attr("data-hour", dailySchedule[i].tag);
      textbox.addClass("col-8 col-md-10 description");
      textbox.val(dailySchedule[i].entry);
  
      if (dayjs().hour() > dailySchedule[i].tag) {
        textbox.addClass("past");
      } else if (dayjs().hour() === dailySchedule[i].tag) {
        textbox.addClass("present");
      } else {
        textbox.addClass("future");
      }
  
      let button = $("<button>");
      button.addClass("btn col-2 col-md-1 saveBtn");
      button.attr("aria-label", "save");
      button.attr("data-hour", dailySchedule[i].tag);
      button.click(save);
  
      let icon = $("<i>");
      icon.addClass("fas fa-save");
      icon.attr("data-hour", dailySchedule[i].tag);
      icon.attr("aria-hidden", "true");
      button.append(icon);
  
      // append elements to the row
      row.append(div);
      row.append(textbox);
      row.append(button);
  
      $("#dailyplanner").append(row);
    }
  }
  //make a for loop to loop through the daily array, and checking the tag value = to hour

//   function saveEntry (index) 
// {
//      var textArea = $("textArea" + index);
//      if(textArea.val()!=="")
//  {
//  dailySchedule[index].entry = textArea.val();
//  localStorage.setItem("dailySchedule", JSON.stringify("dailySchedule"));
//  }
//  else{
//      alert("no entry to save")
//  }
//  };

//  saveEntry();
  
  createSchedule();
});






// var timeDisplayEl = $("#currentDay");


// $(document).ready(function () 
// {
// loading();


// function displayDate() {
//     var nowTime = dayjs().format("MMMM DD, YYYY [at] h:mm:ss a");
//     timeDisplayEl.text(nowTime);
//   }
//   displayDate();
//   setInterval(displayDate, 1000);

//   var dailyplanner = $('#dailyplanner'); 
//    var nowTime = dayjs().format("H");

//   $.each(dailySchedule, function(i, time){

//     dailyplanner.append("div id=\"time" + i +"\"" + "class=\"row\"></div>");
//     $("#time"+i).append("<div id=\"currentTime" + i + "\"" + "class=\"col-2 hour\">" + time.hours + "</div>");
//     let Hourplan = time.tag;
    
//     var wibblyWobbly = "";
//     if (nowTime > Hourplan){
//         wibblyWobbly = "past";
//     }
//     else if (nowTime == Hourplan){ 
//         wibblyWobbly = "present";
//     }
//     else if (nowTime < Hourplan) {
//         wibblyWobbly = "future";
//     }
    
    //build out and correct for text area. 12/7/2022
    //  $("#time"+i).append("<textarea=\"textarea" + i + "\"" + "class=\"col-8" + wibblyWobbly + "\"textarea\">" + dailySchedule[i].entry + "</>");
    // $("#time"+i).append("<div id=\"saveBtn" + i + "data-index=\"" + i + "\"" + "class=\"col-2 saveBtn\">" + "save" + "</div>");
  
// });

//idea to build, need event listener for the save btn click event, but also need to
//build a for loop for the planner
//create the div class and
// $("savebtn").click(function(event){
//     event.preventDefault();
//     var elements = event.target;
//     var index = parseInt($(elements).attr("data-index"),10);
//     console.log(elements);
//     saveEntry(index);
//     });

// });

// function loading() {
//     var data = localStorage.getItem("dailySchedule");
//     if (data) {
//         var dailyArray = JSON.parse(data);
//         $.each(dailyArray, function(i, item) {
//             dailySchedule[i].entry = item.entry;
//         });
//     }
//     else {
//         localStorage.setItem("dailySchedule", JSON.stringify(dailySchedule));
//     }
// }

// function saveEntry (index) 
// {
//     var textArea = $("textArea" + index);
//     if(textArea.val()!=="")
// {
// dailySchedule[index].entry = textArea.val();
// localStorage.setItem("dailySchedule", JSON.stringify("dailySchedule"));
// }
// else{
//     alert("no entry to save")
// }
// };

  

  


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
  // 

  //code starting point will need help later
  //adds a the form to local storage and prints the data
  //issues: this did not save to local storage, thinking more of the functions needs definitions

//To be reused at a later time
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

  //   printDateData();
