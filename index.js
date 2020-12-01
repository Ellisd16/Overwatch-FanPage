
//This calls upon an Overwatch API that gives you the Global player feed
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://overtracker1.p.rapidapi.com/feed/global?page=1",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "ba0b3482fbmsh7c7dadd73170825p1040e7jsn42b1e98522cb",
        "x-rapidapi-host": "overtracker1.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {

    console.log(response);

    //I know this isnt pretty but i couldn't get the forloop to work. Ill try to come back to it and see what i can do

    //here i'm adding the data from the JSON into the html file
    $(".player1").text("Player Name: " + response[0].player.tag + ", Position: " + response[0].role + ", Platform: " + response[0].player.platform);

    $(".player2").text("Player Name: " + response[1].player.tag + ", Position: " + response[1].role + ", Platform: " + response[1].player.platform);

    $(".player3").text("Player Name: " + response[2].player.tag + ", Position: " + response[2].role + ", Platform: " + response[2].player.platform);

    $(".player4").text("Player Name: " + response[3].player.tag + ", Position: " + response[3].role + ", Platform: " + response[3].player.platform);

    $(".player5").text("Player Name: " + response[4].player.tag + ", Position: " + response[4].role + ", Platform: " + response[4].player.platform);

    $(".player6").text("Player Name: " + response[5].player.tag + ", Position: " + response[5].role + ", Platform: " + response[5].player.platform);

    $(".player7").text("Player Name: " + response[6].player.tag + ", Position: " + response[6].role + ", Platform: " + response[6].player.platform);

    $(".player8").text("Player Name: " + response[7].player.tag + ", Position: " + response[7].role + ", Platform: " + response[7].player.platform);

    $(".player9").text("Player Name: " + response[8].player.tag + ", Position: " + response[8].role + ", Platform: " + response[8].player.platform);

    $(".player10").text("Player Name: " + response[9].player.tag + ", Position: " + response[9].role + ", Platform: " + response[9].player.platform);

    $(".player11").text("Player Name: " + response[10].player.tag + ", Position: " + response[10].role + ", Platform: " + response[10].player.platform);

    $(".player12").text("Player Name: " + response[11].player.tag + ", Position: " + response[11].role + ", Platform: " + response[11].player.platform);


})

