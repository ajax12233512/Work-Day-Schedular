//Display current date and time
// var currentHour = moment().format('hh:mm a'); //gets current hour
// console.log(currentHour);

//Displays current date to header
var today = moment();
var displayToday = today.format('dddd, MMMM Do YYYY');
$('#currentDay').text(displayToday)

var $slots = $('.container').children();
console.log($slots);

var testTime = moment('10am', 'h:mma');

// console.log($9am.attr('id'));
$slots.each(function(){
    var time = moment($(this).attr('id'), 'h:mma');//get the time that represents each slot

    if(time.isBefore(testTime)){
        $(this).children('input').css('background-color', 'lightgrey');
    } 
    else if(time.isSame(testTime))
    {
        $(this).children('input').css('background-color', 'red');
    } 
    else if(time.isAfter(testTime))
    {
        $(this).children('input').css('background-color', 'green');
    }   
});

// var onePm = moment('11am', 'h:mma');
// // var isBefore = 
// console.log(onePm.toString());





// var onePm = moment('03:00pm', 'hh:mma');
// console.log(onePm);
