var tickLoop;

// this function was taken from
// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values?page=1&tab=votes#tab-top
function getParameterByName(name)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if (results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}

// on document ready
$(document).ready(function()
{
	var mapId = getParameterByName('map');
	var rulesId = getParameterByName('rules');
	var mcells = $.get('/mapCells', 'id=' + mapId, function()
	{
		var mrules = $.get('/mapRules', 'id=' + rulesId, function()
		{
			// Set the map itself
			ca.map = map;
			if (mcells.responseText.length > 0)
			{
				// Set the map cells
				ca.map.cells = JSON.parse(mcells.responseText);
			}
			if (mrules.responseText.length > 0)
			{
				// Set the ruleset
				ca.rules = JSON.parse(mrules.responseText);
			}
			// Display the CA
			ca.printToPage();
			
			// Set initial population count
			$("#aPopulationCount").text(ca.getPopulation());
		});
	});
});

// tick ca automatically
function autoTick()
{
	// flip the boolean
	ca.autoTicking = !ca.autoTicking;
	
	if (ca.autoTicking)
	{
		tickLoop = setInterval(function()
		{
				ca.tickForAmount(1);
		}, ca.tickInterval);
	}
	else
	{
		clearInterval(tickLoop);
	}
}