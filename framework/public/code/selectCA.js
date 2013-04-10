/*
 * On document ready
 */
 
$(document).ready(function()
{
	// Get the maps from the database
	var mapOptions = $.get("/maps", function()
	{
		// Add the names of maps to the dropdown list
		$("#ddlMaps").append(mapOptions.responseText);
	});
	// Get the rules from the database
	var rules = $.get("/rules", function()
	{
		// Add the names of rules to the dropdown list
		$("#ddlRules").append(rules.responseText);
	});
});

/*
 * Re-directs to the run CA page with specified map/rule
 */
 
function run()
{
	window.location.href = 'runCA.html?map=' + $('#ddlMaps').val() + '&rules=' + $('#ddlRules').val();
}