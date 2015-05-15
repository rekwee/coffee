// this is a comment 

console.log ('This is our text in the console');
// 1. get hold of something on the page  - selector
// $ ('header')
// 2. Do something to that thing
// change any CSS, any html including attributes 
// change the text in something 
// .text ('this is ')
//.css ('background-color', '#FF7163')


//$('h1').text('Welcome to Steer')
//$('nav').css('background-color','#FF7163');
//wait until something happens 

//- user click
//- user hover 
// -user scroll
// - after x amount of seconds 
// - keep doing every x seconds 

// Click event 

$('.menu-trigger').on ('click', function () {
	// body...write the set of instructions in here.
	console.log ('This click is working....')
	//$('nav').css('background-color','#FF7163');
	//$('section p').text

	//$ ('nav').css ('display','block') - not nice to look at as it shoots in, prefer to fade in 
	//$('nav').fadeIn (5000);

	//using jquery built in animation to fade in something in 

	//$ ('nav').slideDown (2000);

	$('nav').slideToggle (1000);
	$('.menu-trigger').animate ({'right':'200'});
});



//new click event 
// 1. Send a message to the console 
// 2. change the text in the  footer
// 3. add a border around the quote sections
// css rule border: 10px #000000


//$('footer').on('click', function(){
	//console.log ('This click works too')
	//$('footer'). text ('Goodbye and thanks for all the fish');
	

//$ ('.customer').css ('border', '10px solid #000000');





