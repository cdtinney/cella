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

	$(targetButton).append('Target');
	$(targetButton).attr("onclick", "toggleButtonCell(this);");
	$(targetButton).attr("class", "state0");

	for (var i = 0; i <= 8; i++)
	{
		$(ddlSurround).append('<option>' + i + '</option>');
	}

	$(surroundButton).append('Surrounding');
	$(surroundButton).attr("onclick", "toggleButtonCell(this);");
	$(surroundButton).attr("class", "state0");

	$(resultButton).append('Result');
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
	else
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
		
		if ($(this).find('#btnTarget').attr('class') == 'state0')
			rule[0] = Number(0);
		else if ($(this).find('#btnTarget').attr('class') == 'state1')
			rule[0] = Number(1);

		rule[1] = ($(this).find('#ddlSurround option:selected').text());

		if ($(this).find('#btnSurround').attr('class') == 'state0')
			rule[2] = Number(0);
		else if ($(this).find('#btnSurround').attr('class') == 'state1')
			rule[2] = Number(1);

		if ($(this).find('#btnResult').attr('class') == 'state0')
			rule[3] = Number(0);
		else if ($(this).find('#btnResult').attr('class') == 'state1')
			rule[3] = Number(1);

		rulesToSave.ruleset.push(rule);
	});

	rulesToSave.name = $('#txtName').val();
	$.post('/mapRules', rulesToSave, function()
	{
	});
}