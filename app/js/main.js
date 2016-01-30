// ============================================
// =================Ani Glow===================
// ============================================

$('.glower').click(function (){
	$(this).addClass('ani-glow').html('Loading...');
	$('.glower-exit').show('slow');
})

$('.glower-exit').click(function (){
	$('.glower').removeClass('ani-glow').html('Click me');
	$(this).hide('slow');
})


// ============================================
// =================Ani Glow===================
// ============================================

$('.rotator').click(function (){
	$(this).addClass('ani-rotate').html('Loading...');
	$('.rotator-exit').show('slow');
})

$('.rotator-exit').click(function (){
	$('.rotator').removeClass('ani-rotate').html('Click me');
	$(this).hide('slow');
})



// ============================================
// =================Bouncer====================
// ============================================


$('.bouncer').click(function (){
	$(this).addClass('turn-to-ball ani-bounce');
	$('.bouncer-exit').show('slow')
})

$('.bouncer-exit').click(function (){
	$('.bouncer').removeClass('turn-to-ball ani-bounce')
	$(this).hide('slow');
})

// ============================================
// =================Clock Step=================
// ============================================

$('.clock-step').click(function (){
	$(this).addClass('turn-to-stick ani-clock-step');
	$('.clock-step-exit').show('slow')
})

$('.clock-step-exit').click(function (){
	$('.clock-step').removeClass('turn-to-stick ani-clock-step')
	$(this).hide('slow');
})


// ============================================
// =================Clock Continous============
// ============================================

$('.clock-continous').click(function (){
	$(this).addClass('turn-to-stick ani-clock-continous');
	$('.clock-continous-exit').show('slow')
})

$('.clock-continous-exit').click(function (){
	$('.clock-continous').removeClass('turn-to-stick ani-clock-continous')
	$(this).hide('slow');
})
