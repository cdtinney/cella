// this function was taken from
// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values?page=1&tab=votes#tab-top
function getParameterByName(name)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(document).ready(function()
{
	var mapId = getParameterByName('map');
	var rulesId = getParameterByName('rules');
	ca.map = map;
	var mcells = $.get('/mapCells', 'id=' + mapId, function()
	{
		ca.map.cells = JSON.parse(mcells.responseText);
		ca.printToPage();
	});
});