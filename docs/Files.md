------------
# Files
------------

* ## JavaScript (/public/code/)

	<table>

	  <tr>
	    <th>file</th><th>description</th>
	  </tr>

	  <tr>
	  	<td>ca.js</td><td>The main logic of the CA simulation - defines an object with a map, ruleset, and properties for current tick duration. Contains the function for a single "tick" of the CA - iterate through cells, check if any rules apply to that cell, update, and return the modified cells.</td>
	  </tr>

	  <tr>
	  	<td>map.js</td><td>Defines the map object used for displaying cellular automata. A 2D array of integers (cells property) is used where a value from 0-9 denotes the cell type. The map object has a function printToPage that creates an HTML table and appends cells (defining class for CSS properties)</td>
	  </tr>

	  <tr>
	  	<td>runCA.js</td><td>Uses the id passes in through the query string to get initial configuration/ruleset from database. Then, it runs the CA.</td>
	  </tr>
	  
	  <tr>
	  	<td>selectCA.js</td><td>Populates the selectCA.html page dropdown lists with map names & rule set names loaded from the database. When the user selects run, the page is re-directed to runCA.html with the selected map & ruleset ids in the query string.</td>
	  </tr>

	  <tr>
	  	<td>editableMap.js</td><td>Essentially the same as map.js, but cells iterate through colors (states) on click. Used for the map editor.</td>
	  </tr>

	  <tr>
	  	<td>editMap.js</td><td>Provides functionality for editMap.html. Allows the user to save maps to the database, and increase map heigth/width.</td>
	  </tr>

	  <tr>
	  	<td>editRules.js</td><td>Provides functionality for editRules.html. Allows new rules to be added, modified, and saved to the database.</td>
	  </tr>

	</table>

* ## HTML (/public/html/)

	<table>

		<tr>
		    <th>file</th><th>description</th>
		</tr>

		<tr>
		  	<td>index.html</td><td>HTML for index page. Just some divs and links to other pages.</td>
		</tr>

		<tr>
		  	<td>selectCA.html</td><td>HTML for "Select CA" page. Contains dropdowns for maps/rulesets that are populated from the database.</td>
		</tr>

		<tr>
			<td>runCA.html</td><td>HTML for the "Run CA" page. Contains buttons which allow the user to select various tick amounts (including an infinite on/off). Contains the div used to display the actual cellular automata (the table added in map.js)</td>
		</tr>

		<tr>
		  	<td>editMap.html</td><td>HTML for the "Edit configuration", or edit map, page. The user can modify a table by clicking individual cells, and has the option to save the configuration, and increase the width/height of the table.</td>
		</tr>

		<tr>
		  	<td>editRules.html</td><td>HTML for the "Edit rules" page. The user has the option to add a variable number of rules using buttons (that iterate through cell colors/types on click), and a dropdown list. The user also has the option to save the rule set to the database.</td>
		</tr>


	</table>

* ## CSS (/public/stylesheets/)

	<table>

		<tr>
		    <th>file</th><th>description</th>
		</tr>

		<tr>
		  	<td>style.css</td><td>Main stylesheet. Contains the properties for the "bars" at the top of the screen which contain titles/buttons. </td>
		</tr>

		<tr>
		  	<td>CA.css</td><td>Stylesheet used for displaying cellular automata. Contains classes for the table cells which have individual colours, as well as the table itself.</td>
		</tr>

		<tr>
		 	<td>editRules.css</td><td>Stylesheet for the edit rules page. Contains classes used for modifying button colour (i.e. cell type/state) on click (in editRules.js).</td>
		</tr>


	</table>

* ## Other (/framework/)

	<table>

		<tr>
		    <th>file</th><th>description</th>
		</tr>

		<tr>
		  	<td>app.js</td><td>Express-generated app, with modifications. Allows retrieval of maps & rulesets fromt he database, and storage of maps & rulesets to the database. </td>
		</tr>

		<tr>
		 	<td>run_server.bat</td><td>A batch file created for ease-of-use. Runs mongod using local data, then runs node with app.js</td>
		</tr>

	</table>
