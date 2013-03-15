$(document).ready(function()
{
	var mapOptions = $.get("/maps", function()
	{
		$("#ddlMaps").append(mapOptions.responseText);
	});
	var rules = $.get("/rules", function()
	{
		$("#ddlRules").append(rules.responseText);
	});
	
	// jquery UI
	applyUI();
});

function run()
{
	window.location.href = 'runCA.html?map=' + $('#ddlMaps').val() + '&rules=' + $('#ddlRules').val();
}