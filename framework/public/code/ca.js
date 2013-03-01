ca = {
	map: {},
	rules: [
		[0,0],
		[1,1],
		[2,1],
		[3,2],
		[4,0],
		[5,4],
		[6,5]],
	
	printToPage: function()
	{
		this.map.printToPage();
	},

	refresh: function()
	{
		this.map.refresh();
	},

	tick: function()
	{
		var oldCells = this.map.cells.slice();
		for (var i = 0; i < oldCells.length; i++)
		{
			oldCells[i] = this.map.cells[i].slice();
		}

		for (var i = 0; i < this.map.cells.length; i++)
		{
			for (var j = 0; j < this.map.cells[i].length; j++)
			{
				var n = 0;
				if (j > 0) n = oldCells[i][j - 1];
				var e = 0;
				if (i < oldCells.length - 1) e = oldCells[i + 1][j];
				var s = 0;
				if (j < oldCells[i].length - 1) s = oldCells[i][j + 1];
				var w = 0;
				if (i > 0) w = oldCells[i - 1][j];
				var count = n + e + s + w;
				var result = 0;
				for (var z = 0; z < this.rules.length; z++)
				{
					if (this.rules[z][0] == count)
					{
						result = this.rules[z][1];
					}
				}
				this.map.cells[i][j] = result;
			}
		}
		this.refresh()
	}
}