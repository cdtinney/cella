ca = {
	map: {},
	rules: [],
	autoTicking: false,
	tickInterval: 100,
	tickCount: 0,
	
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
				//this.getSurrounding(counts, oldCells, i, j);
				this.getSurroundingWrap(counts, oldCells, i, j);

				var result = oldCells[i][j];
				for (var z = 0; z < this.rules.length; z++)
				{
					if (this.rules[z][0] == oldCells[i][j])
					{
						if (counts[this.rules[z][2]] == this.rules[z][1])
						{
							result = this.rules[z][3];
						}
					}
				}
				this.map.cells[i][j] = result;
			}
		}

		// Increment tick count
		this.tickCount++;

		// Update the tick count display
		$("#aTickCount").text(this.tickCount);

		// Update the population count display
		$("#aPopulationCount").text(this.getPopulation());
	},

	getSurrounding: function(counts, oldCells, i, j)
	{
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
	},

	getSurroundingWrap: function(counts, oldCells, i, j)
	{
		// top
		if (j > 0) 
			counts[oldCells[i][j - 1]]++;
		else
			counts[oldCells[i][oldCells[i].length - 1]]++;
		
		// right
		if (i < oldCells.length - 1)
			counts[oldCells[i + 1][j]]++;
		else
			counts[oldCells[0][j]]++;
			
		// bottom
		if (j < oldCells[i].length - 1)
			counts[oldCells[i][j + 1]]++;
		else
			counts[oldCells[i][0]]++;

		// left
		if (i > 0) 
			counts[oldCells[i - 1][j]]++;
		else
			counts[oldCells[oldCells.length - 1][j]]++;
		
		// top right
		if (j > 0 && i < oldCells.length - 1)
			counts[oldCells[i + 1][j - 1]]++;
		else
		{
			if (j <= 0 && i > oldCells.length - 1)
				counts[oldCells[0][oldCells[0].length - 1]]++;
			if (j > 0 && i > oldCells.length - 1)
				counts[oldCells[0][j -1]]++;
			if (j < 0 && i < oldCells.length - 1)
				counts[oldCells[i + 1][oldCells[i].length - 1]]++;
		}
		
		// bottom right
		if (j < oldCells[i].length - 1 && i < oldCells.length - 1) 
			counts[oldCells[i + 1][j + 1]]++;
		else
		{
			if (j >= oldCells[i].length - 1 && i >= oldCells.length - 1)
				counts[oldCells[0][0]]++;
			if (j < oldCells[i].length - 1 && i >= oldCells.length - 1)
				counts[oldCells[0][j + 1]]++;
			if (j >= oldCells[i].length - 1 && i < oldCells.length - 1)
				counts[oldCells[i + 1][0]]++;
		}
		
		// bottom left
		if (j < oldCells[i].length - 1 && i > 0) 
			counts[oldCells[i - 1][j + 1]]++;
		else
		{
			if (i <= 0 && j <= 0)
				counts[oldCells[oldCells.length - 1][0]]++;
			if (i <= 0 && j < oldCells[i].length - 1)
				counts[oldCells[oldCells.length - 1][j + 1]]++;
			if (i > 0 && j >= oldCells[i].length - 1)
				counts[oldCells[i - 1][0]]++;
		}
		
		// top left
		if (j > 0 && i > 0) 
			counts[oldCells[i - 1][j - 1]]++;
		else
		{
			if (j <= 0 && i <= 0)
				counts[oldCells[oldCells.length-1][oldCells[i].length-1]]++;
			if (j <= 0 && i > 0)
				counts[oldCells[i - 1][oldCells[i].length - 1]]++;
			if (j > 0 && i <= 0)
				counts[oldCells[oldCells.length-1][j - 1]]++;
		}
		
	},

	getPopulation: function()
	{
		var count = 0;

		for (var i = 0; i < this.map.cells.length; i++)
		{
			for (var j = 0; j < this.map.cells[i].length; j++)
			{
				if (this.map.cells[i][j] != 0)
					count++;
			}
		}

		return count;
	},

	// Tick for specified number
	tickForAmount: function(numTicks)
	{
		for (var i=0; i<numTicks; i++)
			this.tick();

		this.refresh();
	}
}