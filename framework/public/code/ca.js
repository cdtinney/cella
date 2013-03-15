ca = {
	map: {},
	rules: [],
	autoTicking: false,
	tickInterval: 100,
	
	printToPage: function()
	{
		this.map.printToPage();
	},

	refresh: function()
	{
		this.map.refresh();
	},

	// Single tick
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

				if (j > 0) 
					counts[oldCells[i][j - 1]]++;
				if (i < oldCells.length - 1)
					counts[oldCells[i + 1][j]]++;
				if (j < oldCells[i].length - 1)
					counts[oldCells[i][j + 1]]++;
				if (i > 0) 
					counts[oldCells[i - 1][j]]++;
				if (j > 0 && i < oldCells.length - 1) 
					counts[oldCells[i + 1][j - 1]]++;
				if (j < oldCells[i].length - 1 && i < oldCells.length - 1) 
					counts[oldCells[i + 1][j + 1]]++;
				if (j < oldCells[i].length - 1 && i > 0) 
					counts[oldCells[i - 1][j + 1]]++;
				if (j > 0 && i > 0) 
					counts[oldCells[i - 1][j - 1]]++;

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

	// Tick for specified number
	tickForAmount: function(numTicks)
	{
		for (var i=0; i<numTicks; i++)
			this.tick();

		this.refresh();
	}
}