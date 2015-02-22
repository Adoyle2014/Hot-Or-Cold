/*	toggle instructions-done
  	new game reset
  	guess logic with up/down slider
  	change winning guess #'s to red
  	display fire on win
  	make background fade in and out of a brighter red on win
  	add fire crackling on win
*/




$(document).ready(function() {

	var newgame = document.getElementById("newgame");
	
	var pointer = $("#pointer");
	var enterguess = $("#guessbutton");
	var number = randomNumber(1, 101);
	var turns = null                                                                                 
	
	gameReset();
	instructionToggle();
	console.log("1 - randonNumber = " + number)
	


	
	$("#guessbutton").click(function() {
		var userguess = $("#userguess").val()
		var prevMovement = null
		turns = turns++
		userguess = parseFloat(userguess, 10);
		if (userguess === number) {
			console.log("winning");
			gameWin();
		}else{				
			var moveAmount = (userguess - number);
			moveAmount = Math.abs(moveAmount);
			moveAmount = 100 - moveAmount;
			moveAmount = moveAmount/100;
			moveAmount = moveAmount*383;
			moveAmount = 383 - moveAmount;
			if (turns != 1) {
				prevMovement = moveAmount;
				moveSlider(moveAmount);
				moveAmount = null;
			}else{
				moveAmount = prevMovement - moveAmount;
				prevMovement = moveAmount;
				moveSlider(moveAmount);
				moveAmount = null;
			}				
		}
	});	

	
	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	

	function moveSlider(amt) {
		pointer.animate(
			{ top: amt }, {
			duration: 500,
			easing: 'easeInOutElastic'
		});
	};


	function gameWin() {
		$("#fire").css("display", "block");
		$("#userguess").css("color", "#350620");
		moveSlider(0)		
		
	}
		

	function gameReset() {
		newgame.addEventListener('click', function() {
			$("#fire").css("display", "none");
			$("#userguess").css("color", "#0c0006")
			userguess.value = "";
			moveSlider(383);
			turns = null
			number = randomNumber(1, 101);
		});
	}


	function instructionToggle() {
		$("#howto").click(function() {
			$("#howtotoggle").toggle("fold", 1000);
		});
	}

});











	



