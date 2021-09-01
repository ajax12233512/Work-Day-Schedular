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
        $(this).children('input').addClass('present');
        // $(this).children('input').css('color', 'white');
    } 
    else if(time.isBefore(today)){
        $(this).children('input').addClass('past');
    } 
    else if(time.isAfter(today))
    {
        $(this).children('input').addClass('future');
        $(this).children('input').css('color', 'white');
    }
});

var myStorage = window.localStorage;
var $inputSlots = $slots.children('input');
console.log($inputSlots);
var saveButtons = $('button');

saveButtons.on('click', function(){
    var input = $(this).parent().children('input').val();
    localStorage.setItem($(this).parent().children('h2').text(), input);
    console.log(myStorage);
});



$inputSlots.each(function(){
    var thisName = $(this).parent().children('h2').text()
    if(myStorage.getItem(thisName) == null)
        $(this).val(' ');
    else
    {
        var savedItem = myStorage.getItem(thisName)
        if($(this).val() != myStorage.getItem(thisName))
        {
            console.log("made it here");
            $(this).val(savedItem);
        }
    }
    
});



//Add functionality to have the input clear itself if it is NOT saved
// $(function(){

//     myStorage.getItem()

//     var x = $('#11am').children('input').val();
//     console.log(x);
// })

// var x = $slots.children('input');
// var xLength = x.length;

// console.log(x)
// console.log("x lenght:" + xLength);

// var localStorageArray = [];

// x.each(function(){
//     var timeName = $(this).parent().children('h2').text();
    
// })

