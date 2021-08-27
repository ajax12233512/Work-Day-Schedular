//****************************Notes********************************/
// var currentHour = moment().format('hh:mm a'); //gets current hour
// console.log($9am.attr('id'));



//Displays current date to header
var today = moment();
var displayToday = today.format('dddd, MMMM Do YYYY');
$('#currentDay').text(displayToday)

//Select all the slots in .container
var $slots = $('.container').children();
var testTime = moment('10am', 'h:mma');//for testing

//Goes through time slot and sets backrgound color and text color based on local time
$slots.each(function(){
    var time = moment($(this).attr('id'), 'h:mma');//get the time that represents each slot

    if(time.hour() == today.hour())
    {
        $(this).children('input').css('background-color', 'red');
        $(this).children('input').css('color', 'white');
    } 
    else if(time.isBefore(today)){
        $(this).children('input').css('background-color', 'lightgrey');
    } 
    else if(time.isAfter(today))
    {
        $(this).children('input').css('background-color', 'green');
        $(this).children('input').css('color', 'white');
    }
});

var myStorage = window.localStorage;
var $inputSlots = $slots.children('input');

var saveButtons = $('button');

saveButtons.on('click', function(){
    var input = $(this).parent().children('input').val();
    localStorage.setItem($(this).parent().children('h2').text(), input);
})


//Add functionality to have the input clear itself if it is NOT saved

