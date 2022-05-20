var today = moment();
$('#currentDay').text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
console.log(today);


$(document).ready(function(){
    $(".saveBtn").on("click", function() {
        localStorage.setItem("myContent2", $("#hour-9").val());
        localStorage.setItem("myContent3", $("#hour-10").val());
        localStorage.setItem("myContent4", $("#hour-11").val());
        localStorage.setItem("myContent5", $("#hour-12").val());
        localStorage.setItem("myContent6", $("#hour-13").val());
        localStorage.setItem("myContent7", $("#hour-14").val());
        localStorage.setItem("myContent8", $("#hour-15").val());
        localStorage.setItem("myContent9", $("#hour-16").val());
        localStorage.setItem("myContent10", $("#hour-17").val());
    })
});

function retrieveStorage(){
    $("#hour-9 .description").val(localStorage.getItem("myContent2"));
    $("#hour-10 .description").val(localStorage.getItem("myContent3"));
    $("#hour-11 .description").val(localStorage.getItem("myContent4"));
    $("#hour-12 .description").val(localStorage.getItem("myContent5"));
    $("#hour-13 .description").val(localStorage.getItem("myContent6"));
    $("#hour-14 .description").val(localStorage.getItem("myContent7"));
    $("#hour-15 .description").val(localStorage.getItem("myContent8"));
    $("#hour-16 .description").val(localStorage.getItem("myContent9"));
    $("#hour-17 .description").val(localStorage.getItem("myContent10"));
}

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
        $(this).addClass("future");
        $(this).removeClass("present");
    }
    else{
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    
    }

    })
}
timeBlockColors();
