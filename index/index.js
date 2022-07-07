let pastToggle = false;
let presentToggle = false;
let futureToggle = false;
var date;
var hours;
var minutes;
var seconds;
var active = false;

function setTime() {
    date = new Date();
    hours = date.getHours().toString();
    minutes = date.getMinutes().toString();
    seconds = date.getSeconds().toString();

    if (hours.length == 1){
        var placeholder = hours;
        hours = 0;
        hours += placeholder;
    }

    if (minutes.length == 1){
        var placeholder = minutes;
        minutes = 0;
        minutes += placeholder;
    }

    if (seconds.length == 1){
        var placeholder = seconds;
        seconds = 0;
        seconds += placeholder;
    }

    $(".time").text("#" + hours + minutes + seconds);

    if (active == true){
        $(".when").css("background-color", "#" + hours + minutes + seconds);
        $(".activate h3").text("Deactivate");
    } else {
        $(".when").css("background-color", "#717B92");
        $(".activate h3").text("Activate");
    }
}

$(document).ready(function () {

    $("#activate").click(function () { 
        if (active == false){
            active = true;
        } else {
            active = false;
        }
        
    });

    $(".name").click(function () { 
        window.location.href = "https://linktr.ee/christo6897"
        
    });

    $(".current").hover(function () {
        // over
        $(this).css("filter", "none");
        $(this).css("-webkit-filter", "blur(0)");
    }, function () {
        // out
        $(this).css("filter", "blur(.25rem)");
        $(this).css("-webkit-filter", "blur(.25rem)");
    }
    );

    $(".completed").hover(function () {
        // over
        $(this).css("filter", "none");
        $(this).css("-webkit-filter", "blur(0)");
    }, function () {
        // out
        $(this).css("filter", "blur(.25rem)");
        $(this).css("-webkit-filter", "blur(.25rem)");
    }
    );


    $(".headshot").hover(function () {
            // over
            $(this).css("filter", "none");
            $(this).css("-webkit-filter", "grayscale(0%)");
        }, function () {
            // out
            $(this).css("filter", "grayscale(100%)");
            $(this).css("-webkit-filter", "grayscale(100%)");
        }
    );

    $(".button").click(function () { 
        window.location.href = "#header"
    });

    $(".heading.button").click(function () { 
        alert("You may be wondering what is happening with all the question marks, and they are there because I believe one should question everything")
    });

   $("#past").hover(function () {
        // over
        $(this).css("background-color", "#ab6f00");
    }, function () {
        // out
        if(pastToggle == false){
            $(this).css('background-color', "#3B3D42");
        } else {
            $(this).css('background-color', "orange");
        }
    }
   );

   $("#present").hover(function () {
    // over
    $(this).css("background-color", "#ab6f00");
    }, function () {
    // out
    if(presentToggle == false){
        $(this).css('background-color', "#3B3D42");
    } else {
        $(this).css('background-color', "orange");
    }
    }
    );

    $("#future").hover(function () {
        // over
        $(this).css("background-color", "#ab6f00");
    }, function () {
        // out
        if(futureToggle == false){
            $(this).css('background-color', "#3B3D42");
        } else {
            $(this).css('background-color', "orange");
        }
    }
   );
   
   $("#past").click(function () { 
    if (pastToggle == false){
        $(".who p").text("My family is from Ukraine, but I was born here, in the US. I was born in 2005 and first started school in 2009. Ever since I was young I've been interested in technology as my father worked with it for a living.");
        pastToggle = true;
        presentToggle = false;
        futureToggle = false;
        $("#present").css("background-color", "#3B3D42");
        $("#future").css("background-color", "#3B3D42");
    } else {
        $(".who p").text("");
        pastToggle = false;
    }
    
   });

   $("#present").click(function () { 
    if (presentToggle == false){
        $(".who p").text("At the moment I'm in highschool about to start studying abroad in Japan. As you may know I'm working as a NexTech intern. I've focused my interest more specifcally onto software and web development.");
        presentToggle = true;
        pastToggle = false;
        futureToggle = false;
        $("#past").css("background-color", "#3B3D42");
        $("#future").css("background-color", "#3B3D42");
    } else {
        $(".who p").text("");
        presentToggle = false;
    }
    
   });

   $("#future").click(function () { 
    if (futureToggle == false){
        $(".who p").text("In the future I hope to attend the IUPUI School of Informatics to earn their full-stack informatics degree. I plan on furthering my skills and portfolio both in and outside of school in hopes to secure a living doing what I love.");
        futureToggle = true;
        presentToggle = false;
        pastToggle = false;
        $("#present").css("background-color", "#3B3D42");
        $("#past").css("background-color", "#3B3D42");
    } else {
        $(".who p").text("");
        futureToggle = false;
    }
    
   });

    setInterval(function() {setTime();} , 1000);

   $(".current").click(function () { 
    window.location.href = "../current/current.html"
    
   });

   $(".completed").click(function () { 
    window.location.href = "../completed/completed.html"
    
   });
});