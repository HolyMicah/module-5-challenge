var today = moment();
$('#currentDay').text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
console.log(today);


$(document).ready(function(){
    
    $(".saveBtn").on("click", function() {
        
        var textInput = $(this).siblings(".description").val();
        var timeSection = $(this).parent().attr("id");
        
        localStorage.setItem(timeSection, textInput);
    })
    
    console.log(localStorage);

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
});


    


function timeBlockColors(){
    var currentTime = moment().hour();
    console.log(currentTime);

    $('.time-block').each(function(){
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

    if(timeBlock < currentTime){
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else if(timeBlock === currentTime){
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }
    else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    
    }

    })
}
timeBlockColors();
