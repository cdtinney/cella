$(document).ready(function()
{
	editableMap.printToPage();
});

/*
 * Saves the current map to the database
 */
function saveMap()
{
	// Create an empty object
	mapToSave = {};
	// Set the cells to the editable map cells
	mapToSave.cells = editableMap.cells;
	// Set the name to the user-specified name
	mapToSave.name = $('#txtName').val();

	if (mapToSave.name == "")
		alert('Empty save names are not allowed!');
	else
	{
		$.post('/mapCells', mapToSave, function()
		{
		});
	}
}

/*
 * Increases the width of the editableMap grid
 */
 
function increaseWidth()
{
	for (var i = 0; i < editableMap.cells.length; i++)
	{
		editableMap.cells[i].push(0);
	}
	editableMap.printToPage();
}

/*
 * Increases the height of the editableMap grid
 */
 
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