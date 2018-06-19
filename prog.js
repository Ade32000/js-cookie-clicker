var button = $('#click');
var display = $('#display');
var multiply = $('#multiply');
var score = 0;
var multiplier = 1;
var price = 50;
var autoclic = $('#autoclic');


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



var style1 = function style()
		{
			if (score< 50)
			{
				autoclic.prop('disabled', true);
			}
			else
			{
				autoclic.prop('disabled', false);
			}
		};





// Actions associées au bouton 'Autoclicker' :
	
//	 autoclic.click(function()
//	{
		
 //});