$('.bouncer').click(function (){
	$(this).addClass('turn-to-ball ani-bounce');
})

function bouncerExit (){
	$('.bouncer').removeClass('turn-to-ball ani-bounce')
}

$('.clock-step').click(function (){
	$(this).addClass('turn-to-stick ani-clock-step');
})

function clockStepExit (){
	$('.clock-step').removeClass('turn-to-stick ani-clock-step')
}

$('.clock-continous').click(function (){
	$(this).addClass('turn-to-stick ani-clock-continous');
})

function clockContinuosExit (){
	$('.clock-continous').removeClass('turn-to-stick ani-clock-continous')
}
