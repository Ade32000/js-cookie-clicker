var button = $('#click');
var display = $('#display');
var score = 0;
var multiplier = 1;

	$('#click').click(function()
	{
		score = score +1 * multiplier;	
	
			if(score < 0)
			{
				score = 0;
			}

			$('#display').html(score);
	});


	$('#multiply').click(function augmenterMultiplicateur()
	{
		multiplier++;
		score = score - 50;
		$('#multiply').html('Multiply' + '  x ' + multiplier);
		
	});



	