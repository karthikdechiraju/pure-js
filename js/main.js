$(document).ready(function(){
    

    $("#dive").click(function(){
        $("#name").addClass("is-display");
        $("#divebutton").addClass("no-display");
    });


    $(document).keypress(function() {
    	$("#object").animate({bottom : "50vh"},300);
    	$("#object").animate({bottom : "17.2vh"},300);
    });

    setInterval(function(){
    	var obstacle = Math.floor((Math.random() * 10) + 1);
		if (obstacle == 7 || obstacle == 8 || obstacle == 9) {
			powerEntrance();
		}else{
			obstacleEntrance();
		}	
     },1500);
	});


function powerEntrance(){
	var img = $("#coin").html("<img>");
	$("#coin img").attr({
		src: 'images/coin.png'
	});
	$("#coin img").animate({left: "-20vw"}, 1500);
}
function obstacleEntrance(){
	var img = $("#obstacle").html("<img>");
	$("#obstacle img").attr({
		src: 'images/untitled.png'
	});
	$("#obstacle img").animate({left: "-20vw"}, 1500)
	
}