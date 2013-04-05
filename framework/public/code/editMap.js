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

function increaseWidth()
{
	for (var i = 0; i < editableMap.cells.length; i++)
	{
		editableMap.cells[i].push(0);
	}
	editableMap.printToPage();
}

function increaseHeight()
{
	cellRow = [];
	for (var i = 0; i < editableMap.cells[0].length; i++)
	{
		cellRow.push(0);
	}
	editableMap.cells.push(cellRow);
	editableMap.printToPage();
}