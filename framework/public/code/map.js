map = {
	cells: [
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,1,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,1,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,1],
		[0,0,0,0,1,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]],

	printToPage: function()
	{ 
		var table = document.createElement('table');

		for (var i = 0; i < this.cells.length; i++)
		{
			var tr= document.createElement('tr');
			$(table).append(tr);
			for (var j = 0; j < this.cells[i].length; j++)
			{
				var td = document.createElement('td');
				$(tr).append(td);
				$(td).append(this.cells[i][j]);
				$(td).attr("id", "td" + i + j);
			}
		}

		$("html").append(table);
	},

	refresh: function()
	{		

		for (var i = 0; i < this.cells.length; i++)
		{
			for (var j = 0; j < this.cells[i].length; j++)
			{
				$("#td" + i + j).empty();
				$("#td" + i + j).append(this.cells[i][j]);
			}
		}
	},

	test: function()
	{
		this.cells[4][4] = 1;
	}
}