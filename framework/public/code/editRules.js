/*
 * Adds a div containing elements for creating rules
 */

function addRule()
{
	// Create the HTML elements needed for a single rule
	var div = document.createElement('div');
	var targetButton = document.createElement('button');
	var ddlSurround = document.createElement('select');
	var surroundButton = document.createElement('button');
	var resultButton = document.createElement('button');

	// Set class for the div containing the rule
	$(div).attr('class', 'divRule');
	
	// Set the id for each button
	$(targetButton).attr('id', 'btnTarget');
	$(ddlSurround).attr('id', 'ddlSurround');
	$(surroundButton).attr('id', 'btnSurround');
	$(resultButton).attr('id', 'btnResult');
	
	// Append each button to the div
	$(div).append(targetButton);
	$(div).append(ddlSurround);
	$(div).append(surroundButton);
	$(div).append(resultButton);

	// Set label, onclick function, and class
	$(targetButton).append('target');
	$(targetButton).attr("onclick", "toggleButtonCell(this);");
	$(targetButton).attr("class", "state0");

	// Populate drop down list with integers 0-8
	for (var i = 0; i <= 8; i++)
	{
		$(ddlSurround).append('<option>' + i + '</option>');
	}

	// Set label, onclick function, and class
	$(surroundButton).append('surrounding');
	$(surroundButton).attr("onclick", "toggleButtonCell(this);");
	$(surroundButton).attr("class", "state0");

	// Set label, onclick function, and class
	$(resultButton).append('result');
	$(resultButton).attr("onclick", "toggleButtonCell(this);");
	$(resultButton).attr("class", "state0");

	// Add the div
	$('#divRules').append(div);
}

/*
 * Toggles a button state between 0-8 (each state is a different colour)
 */
 
function toggleButtonCell(btn)
{
	if ($(btn).attr('class') == 'state0')
	{
		$(btn).attr('class', 'state1');
	}
	else if ($(btn).attr('class') == 'state1')
	{
		$(btn).attr('class', 'state2');
	}
	else if ($(btn).attr('class') == 'state2')
	{
		$(btn).attr('class', 'state3');
	}
	else if ($(btn).attr('class') == 'state3')
	{
		$(btn).attr('class', 'state4');
	}
	else if ($(btn).attr('class') == 'state4')
	{
		$(btn).attr('class', 'state5');
	}
	else if ($(btn).attr('class') == 'state5')
	{
		$(btn).attr('class', 'state6');
	}
	else if ($(btn).attr('class') == 'state6')
	{
		$(btn).attr('class', 'state7');
	}
	else if ($(btn).attr('class') == 'state7')
	{
		$(btn).attr('class', 'state8');
	}
	else if ($(btn).attr('class') == 'state8')
	{
		$(btn).attr('class', 'state0');
	}
}

/*
 * Saves the current rules to database
 */
 
function saveRules()
{
	// Create empty object
	rulesToSave = {};
	rulesToSave.ruleset = [];
	
	// For each rule
	$('.divRule').each(function(index)
	{
		var rule = [0, 0, 0, 0];
		
		// Get + set the target cell type
		if ($(this).find('#btnTarget').attr('class') == 'state0')
			rule[0] = Number(0);
		else if ($(this).find('#btnTarget').attr('class') == 'state1')
			rule[0] = Number(1);
		else if ($(this).find('#btnTarget').attr('class') == 'state2')
			rule[0] = Number(2);
		else if ($(this).find('#btnTarget').attr('class') == 'state3')
			rule[0] = Number(3);
		else if ($(this).find('#btnTarget').attr('class') == 'state4')
			rule[0] = Number(4);
		else if ($(this).find('#btnTarget').attr('class') == 'state5')
			rule[0] = Number(5);
		else if ($(this).find('#btnTarget').attr('class') == 'state6')
			rule[0] = Number(6);
		else if ($(this).find('#btnTarget').attr('class') == 'state7')
			rule[0] = Number(7);
		else if ($(this).find('#btnTarget').attr('class') == 'state8')
			rule[0] = Number(8);

		// Get + set the number of surrounding cells
		rule[1] = ($(this).find('#ddlSurround option:selected').text());

		// Get + set surrounding cell type
		if ($(this).find('#btnSurround').attr('class') == 'state0')
			rule[2] = Number(0);
		else if ($(this).find('#btnSurround').attr('class') == 'state1')
			rule[2] = Number(1);
		else if ($(this).find('#btnSurround').attr('class') == 'state2')
			rule[2] = Number(2);
		else if ($(this).find('#btnSurround').attr('class') == 'state3')
			rule[2] = Number(3);
		else if ($(this).find('#btnSurround').attr('class') == 'state4')
			rule[2] = Number(4);
		else if ($(this).find('#btnSurround').attr('class') == 'state5')
			rule[2] = Number(5);
		else if ($(this).find('#btnSurround').attr('class') == 'state6')
			rule[2] = Number(6);
		else if ($(this).find('#btnSurround').attr('class') == 'state7')
			rule[2] = Number(7);
		else if ($(this).find('#btnSurround').attr('class') == 'state8')
			rule[2] = Number(8);

		// Get + set resulting cell type
		if ($(this).find('#btnResult').attr('class') == 'state0')
			rule[3] = Number(0);
		else if ($(this).find('#btnResult').attr('class') == 'state1')
			rule[3] = Number(1);
		else if ($(this).find('#btnResult').attr('class') == 'state2')
			rule[3] = Number(2);
		else if ($(this).find('#btnResult').attr('class') == 'state3')
			rule[3] = Number(3);
		else if ($(this).find('#btnResult').attr('class') == 'state4')
			rule[3] = Number(4);
		else if ($(this).find('#btnResult').attr('class') == 'state5')
			rule[3] = Number(5);
		else if ($(this).find('#btnResult').attr('class') == 'state6')
			rule[3] = Number(6);
		else if ($(this).find('#btnResult').attr('class') == 'state7')
			rule[3] = Number(7);
		else if ($(this).find('#btnResult').attr('class') == 'state8')
			rule[3] = Number(8);

		// Add the current rule to the list of rules
		rulesToSave.ruleset.push(rule);
	});

	rulesToSave.name = $('#txtName').val();

	// Check the save name is non-empty
	if (rulesToSave.name == "")
		alert('Empty save names are not allowed!');
	else
	{
		// POST with rulesToSave object
		$.post('/mapRules', rulesToSave, function(data)
		{
		});
	}
}