$(document).ready(function()
{
	editableMap.printToPage();
});

function saveMap()
{
	mapToSave = {};
	mapToSave.cells = editableMap.cells;
	mapToSave.name = $('#txtName').val();
	$.post('/mapCells', mapToSave, function()
	{
	});
}