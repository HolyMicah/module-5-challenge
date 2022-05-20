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

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
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
