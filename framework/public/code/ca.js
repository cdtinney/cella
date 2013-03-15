ca = {
	map: {},
	rules: [	//format: [current cell type, surrounding cell type, number of surrounding cells of given type, resulting cell]
		[1,1,0,0],
		[1,1,1,0],
		[1,1,4,0],
		[1,1,5,0],
		[1,1,6,0],
		[1,1,7,0],
		[1,1,8,0],
		[0,1,3,1]],
	
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
				var counts = [0,0,0,0,0,0,0,0,0,0];

				if (j > 0) counts[oldCells[i][j - 1]]++;
				if (i < oldCells.length - 1) counts[oldCells[i + 1][j]]++;
				if (j < oldCells[i].length - 1) counts[oldCells[i][j + 1]]++;
				if (i > 0) counts[oldCells[i - 1][j]]++;
				if (j > 0 && i < oldCells.length - 1) counts[oldCells[i + 1][j - 1]]++;
				if (j < oldCells[i].length - 1 && i < oldCells.length - 1) counts[oldCells[i + 1][j + 1]]++;
				if (j < oldCells[i].length - 1 && i > 0) counts[oldCells[i - 1][j + 1]]++;
				if (j > 0 && i > 0) counts[oldCells[i - 1][j - 1]]++;

				var result = oldCells[i][j];
				for (var z = 0; z < this.rules.length; z++)
				{
					if (this.rules[z][0] == oldCells[i][j])
					{
						if (counts[this.rules[z][1]] == this.rules[z][2])
						{
							result = this.rules[z][3];
						}
					}
				}
				this.map.cells[i][j] = result;
			}
		}
	},

	tick1: function()
	{
		this.tick();
		this.refresh();
	},

	tick10: function()
	{
		for (var i=0; i<10; i++)
			this.tick();

		this.refresh();
	},

	tick100: function()
	{
		for (var i=0; i<100; i++)
			this.tick();

		this.refresh();
	},

	tick1000: function()
	{
		for (var i=0; i<1000; i++)
			this.tick();

		this.refresh();
	}
}