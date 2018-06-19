var button = $('#click');
var display = $('#display');
var multiply = $('#multiply');
var score = 0;
var multiplier = 1;
var price = 50;
var autoclic = $('#autoclic');
var bonus = $('#bonus');


// Actions associées au bouton 'click' :

	button.click(function()
	{
		score = score +1 * multiplier;
		
		if (score>=200)
		{
			setInterval(function()
			{
				score = score +1 * multiplier;
				display.html(score);
			},1000);
		}

		display.html(score);
	});
		
	
// Actions associées au bouton 'Multiply' :

	multiply.click(function augmenterMultiplicateur()
	{
		multiplier++;

		score = score - price;

		multiply.html('x ' + multiplier);

			if(score < 0)
			{
				score = 0;
			}

		display.html(score);

		price = price *2;

		multiply.html('x' + multiplier + ' Prix : ' + price);

		
	});

// Actions associées au bouton 'Autoclicker' :
	
	autoclic.click(function()
	{
		if (score<500)
		{
			alert("Le prix de l'autoclicker est de 500, vous n'avez pas suffisamment de crédit !");
		}
		else
		{
			autoclic.prop('disabled' , true);
		}

	});

	// Actions associées au bouton 'BONUS' :
	
		

	bonus.click(function()
	{
		var timeLeft = 30;
		var timerId = setInterval('countdown', 1000);

			if (score<50)
			{
				alert("Le prix du BONUS est de 5000, vous n'avez pas suffisamment de crédit !");
			}
			else
			{
				score = score - 5000;
do {

    				timeLeft =	timeLeft--;
}
				while (timeLeft > 0)
				{
					if (timeLeft == 0) 
			 		{
    					clearTimeout(timerId);
  					}
  			 		else 
  			 		{
    					bonus.html(timeLeft);
  					}}
				bonus.prop('disabled' , true);
			}

	});
