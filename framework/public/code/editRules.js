function addRule()
{
	var div = document.createElement('div');
	var targetButton = document.createElement('button');
	var ddlSurround = document.createElement('select');
	var surroundButton = document.createElement('button');
	var resultButton = document.createElement('button');

	$(div).attr('class', 'divRule');
	$(targetButton).attr('id', 'btnTarget');
	$(ddlSurround).attr('id', 'ddlSurround');
	$(surroundButton).attr('id', 'btnSurround');
	$(resultButton).attr('id', 'btnResult');
	
	$(div).append(targetButton);
	$(div).append(ddlSurround);
	$(div).append(surroundButton);
	$(div).append(resultButton);

	$(targetButton).append('target');
	$(targetButton).attr("onclick", "toggleButtonCell(this);");
	$(targetButton).attr("class", "state0");

	for (var i = 0; i <= 8; i++)
	{
		$(ddlSurround).append('<option>' + i + '</option>');
	}

	$(surroundButton).append('surrounding');
	$(surroundButton).attr("onclick", "toggleButtonCell(this);");
	$(surroundButton).attr("class", "state0");

	$(resultButton).append('result');
	$(resultButton).attr("onclick", "toggleButtonCell(this);");
	$(resultButton).attr("class", "state0");

	$('#divRules').append(div);
}

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

function saveRules()
{
	rulesToSave = {};
	rulesToSave.ruleset = [];
	
	$('.divRule').each(function(index)
	{
		var rule = [0, 0, 0, 0];
		
		// get target cell type
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

		rule[1] = ($(this).find('#ddlSurround option:selected').text());

		// get surrounding cell type
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

		// get resulting cell type
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

		rulesToSave.ruleset.push(rule);
	});

	rulesToSave.name = $('#txtName').val();

	// Check the save name is non-empty
	if (rulesToSave.name == "")
		alert('Empty save names are not allowed!');
	else
	{
		$.post('/mapRules', rulesToSave, function(data)
		{
		});
	}
}