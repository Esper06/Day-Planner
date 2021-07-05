//Getting elements from out html to use in javascript

var scheduleContainerEL = $('#scheduleContainer') //selects the entire schedule container
var timeContainerEL = $('#timesContainer') //selects the times on the left inside the container
var textContainerEL = $('#textContainer') //selects the text boxes in the middle of the container

var nineAM = $('#9amText')
var tenAM = $('#10amText') 
var elevenAM = $('#11amText')
var twelvePM = $('#12pmText')
var onePM = $('#1pmText')      //These are all selectors for the individual rows, ready for me to change their classes
var twoPM = $('#2pmText')
var threePM = $('#3pmText')
var fourPM = $('#4pmText')
var fivePM = $('#5pmText')


var nineLock = $('#nineLock')
var tenLock = $('#tenLock')
var elevenLock = $('#elevenLock')
var twelveLock = $('#twelveLock')
var oneLock = $('#oneLock')        //selects the lock icons individually 
var twoLock = $('#twoLock')
var threeLock = $('#threeLock')
var fourLock = $('#fourLock')
var fiveLock = $('#fiveLock')

//Variables we'll use later

var time = new Date();      //makes a new variable and sets it as the current time. We have to do this again later as trying to only declare it globally breaks the code
var hour = time.getHours();   //specifically gets the hour and assigns it to a variable



//Function to add today's date to the html and make it tick up
function todayTick() {
    var currentTime = new Date(), //new Date() gets todays date and assigns it to currentTime
    month = currentTime.getMonth() + 1,
    day = currentTime.getDate(),
    year = currentTime.getFullYear(),  //we make a load of new variables from that date and add them together
    hours = currentTime.getHours(),     //note that the months one had to have +1 as it was a month early for some reason?
    minutes = currentTime.getMinutes(),
    seconds = currentTime.getSeconds(),

    text = (day + "/" + month + "/" + year + ' ' + hours + ":" + minutes + ":" + seconds); //we add them into a string

    document.getElementById('todaysDate').innerHTML = text; //then make the span inside our HTML become the end result
};

setInterval(todayTick, 1000);   //This updates the current time every second so it's up to date




//else if statements to change the colour of the text boxes based on what time it is

//9AM
if (hour < 9) { //hour is assigned further up the code as whatever the current hour is
    $(nineAM).css('background-color', 'lime') //we simply change the css based on if the hour equals a preset value
} 
else if (hour == 9) { 
    $(nineAM).css('background-color', 'red')
} 
else {
    $(nineAM).css('background-color', 'grey')
}


//10AM
if (hour < 10) {
    $(tenAM).css('background-color', 'lime')
}
else if (hour == 10) {
    $(tenAM).css('background-color', 'red')
}
else {
    $(tenAM).css('background-color', 'grey')
}



//11AM
if (hour < 11) {
    $(elevenAM).css('background-color', 'lime')
}
else if (hour == 11) {
    $(elevenAM).css('background-color', 'red')
}
else {
    $(elevenAM).css('background-color', 'grey')
}



//12PM
if (hour < 12) {
    $(twelvePM).css('background-color', 'lime')
}
else if (hour == 12) {
    $(twelvePM).css('background-color', 'red')
}
else {
    $(twelvePM).css('background-color', 'grey')
}


//1PM
if (hour < 13) {
    $(onePM).css('background-color', 'lime')
}
else if (hour == 13) {
    $(onePM).css('background-color', 'red')
}
else {
    $(onePM).css('background-color', 'grey')
}


//2PM
if (hour < 14) {
    $(twoPM).css('background-color', 'lime')
}
else if (hour == 14) {
    $(twoPM).css('background-color', 'red')
}
else {
    $(twoPM).css('background-color', 'grey')
}


//3PM
if (hour < 15) {
    $(threePM).css('background-color', 'lime')
}
else if (hour == 15) {
    $(threePM).css('background-color', 'red')
}
else {
    $(threePM).css('background-color', 'grey')
}


//4PM
if (hour < 16) {
    $(fourPM).css('background-color', 'lime')
}
else if (hour == 16) {
    $(fourPM).css('background-color', 'red')
}
else {
    $(fourPM).css('background-color', 'grey')
}


//5PM
if (hour < 17) {
    $(fivePM).css('background-color', 'lime')
}
else if (hour == 17) {
    $(fivePM).css('background-color', 'red')
}
else {
    $(fivePM).css('background-color', 'grey')
}




//functions for all locks, when clicked they should turn red and save the text in the div they're inside

//9am lock
function saveNote9(event) {
    $(nineLock).css('color', 'red')
    localStorage.setItem("9amText", nineAM.innerhtml)
}

//10am Lock
function saveNote10(event) {
    $(tenLock).css('color', 'red')
}

//11am Lock
function saveNote11(event) {
    $(elevenLock).css('color', 'red')
}

//12PM Lock
function saveNote12(event) { 
    $(twelveLock).css('color', 'red')
}

//1PM Lock
function saveNote1(event) {
    $(oneLock).css('color', 'red')
}

//2PM Lock
function saveNote2(event) {
    $(twoLock).css('color', 'red')
}

//3PM Lock
function saveNote3(event) {
    $(threeLock).css('color', 'red')
}

//4PM Lock
function saveNote4(event) {
    $(fourLock).css('color', 'red')
}

//5PM Lock
function saveNote5(event) {
    $(fiveLock).css('color', 'red')
}



$(nineLock).click(saveNote9);
$(tenLock).click(saveNote10);
$(elevenLock).click(saveNote11);
$(twelveLock).click(saveNote12);
$(oneLock).click(saveNote1);      //These all run the function to save the notes on click for each individual lock
$(twoLock).click(saveNote2);
$(threeLock).click(saveNote3);
$(fourLock).click(saveNote4);
$(fiveLock).click(saveNote5);