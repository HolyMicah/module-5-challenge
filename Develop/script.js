var today = moment();
$('#currentDay').text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
console.log(today);


$(document).ready(function(){
    $(".saveBtn").on("click", function() {
        localStorage.setItem("myContent", $(".9am").val());
        localStorage.setItem("myContent", $(".10am").val());
        localStorage.setItem("myContent", $(".11am").val());
        localStorage.setItem("myContent", $(".12pm").val());
        localStorage.setItem("myContent", $(".1pm").val());
        localStorage.setItem("myContent", $(".2pm").val());
        localStorage.setItem("myContent", $(".3pm").val());
        localStorage.setItem("myContent", $(".4pm").val());
        localStorage.setItem("myContent", $(".5pm").val());
        console.log(localStorage.getItem($(".9am")));
    })
});
















function timeBlockColors(){
    var currentTime = moment().hour();
    console.log(currentTime)

    $('.time-block').each(function(){
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

    if(timeBlock < currentTime){
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else if(timeBlock === currentTime){
        $(this).removeClass("past");
        $(this).addClass("future");
        $(this).removeClass("present");
    }
    else{
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present")
    
    }

    })
}
timeBlockColors();