var scoreGoals;
var win = 0;
var lose = 0;
var totalScore = 0;

var resetAndStart = function () {
    $(".crystals").empty();

var images = ["assets/images/Gem_01.png", "assets/images/Gem_02.png", "assets/images/Gem_03.png", "assets/images/Gem_04.png", ];

scoreGoals = Math.floor(Math.random() * 69) + 30;

$("#score-Goal").html("The number: " + scoreGoals);

for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "data-random": random
        });

        crystal.css({
            "background-image": "url('" + images[i] + "')",
            //"background-size": "cover"
        });

        $(".crystals").append(crystal);
    }

    $("#total-score").html(totalScore);
    console.log("El de arriba", random);
}

resetAndStart();

$(document).on('click', ".crystal", function () {
    var num = parseInt($(this).attr('data-random'));
    totalScore += num;

    $("#total-score").html("Your total score is: " + totalScore);

    console.log(totalScore);
    console.log("el num", num);

    if (totalScore > scoreGoals){
        lose++;

        $("#lose").html("You lost: " + lose);
        $("#result").html("You lost! :(");
        $("#result").css("background-color", "red");

        totalScore = 0;

        resetAndStart();
    }

    else if (totalScore === scoreGoals) {
        win++
        $("#win").html("You win: " + win);
        $("#result").html("You win! :)");
        $("#result").css("background-color", "green")
        totalScore = 0;
        resetAndStart();
    }
    
});

