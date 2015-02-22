/*	toggle instructions-done
  	new game reset
  	guess logic with up/down slider
  	change winning guess #'s to red
  	display fire on win
  	make background fade in and out of a brighter red on win
  	add fire crackling on win
*/




$(document).ready(function() {

///Global Variables----------------------------------------------------
	var newgame = document.getElementById("newgame");	
	var pointer = $("#pointer");
	var enterguess = $("#guessbutton");
	var number = randomNumber(1, 101);
	var turns = null     
	var tryLis =               

///Starting Functions--------------------------------------------------
	gameReset();
	instructionToggle();
	console.log(number);



	
///Slider Logic----------------------------------------------------------	
	$("#guessbutton").click(function() {
		var userguess = $("#userguess").val()
		var prevMovement = null
		turns = turns++
		userguess = parseFloat(userguess, 10);
		if (userguess === number) {
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
				$("#trylist").append
				moveAmount = null;
			}else{
				moveAmount = prevMovement - moveAmount;
				prevMovement = moveAmount;
				moveSlider(moveAmount);
				moveAmount = null;
			}				
		}
	});	

	
///Random Number Generator------------------------------------------
	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	

///Slider Mover--------------------------------------------------------------
	function moveSlider(amt) {
		pointer.animate(
			{ top: amt }, {
			duration: 500,
			easing: 'easeInOutElastic'
		});
	};


///Game Winning Function-------------------------------------------------
	function gameWin() {
		$("body").animate({ backgroundColor: "#aa254d"})
		$("#fire").css("display", "block");
		pulse();
		playFire();

	}
		

///Reset Game Function---------------------------------------------------
	function gameReset() {
		newgame.addEventListener('click', function() {
			$("#fire").css("display", "none");
			$("#userguess").css("color", "#0c0006")
			pulseReset();
			userguess.value = "";
			moveSlider(383);
			turns = null
			number = randomNumber(1, 101);
			endFire();
		});
	}


///Instruction Animation-----------------------------------------------------
	function instructionToggle() {
		$("#howto").click(function() {
			$("#howtotoggle").toggle("fold", 1000);
		});
	}

	function pulse() {
	    $('body').animate({
	        opacity: 0.5
	    }, 700, function() {
	        $('body').animate({
	            opacity: 1
	        }, 700, function() {
	            pulse();
	        });
	    }); 
	};

	function pulseReset() {
		$("body").stop();
		$("body").css({
			opacity: 1
		,
			backgroundColor: "#350620"
			
			});
		}


	function playFire () {
		 $('#fire-sound')[0].volume = 0.5;
		 $('#fire-sound')[0].load();
		 $('#fire-sound')[0].play();
	}

	function endFire() {
		$('#fire-sound')[0].pause();
	}
	

});











	



