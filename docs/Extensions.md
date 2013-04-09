------------
# Extensions
------------

* ## CA
	* **Boundary Behaviours**
		* Optimally, there would be multiple options for the behaviour of cells beyond the boundaries. Currently, they are simply null states (i.e. cells outside the array are dead). However, this creates inaccuracies when computing the surrounding cells for border cells. To fix this, we are attempting to implement a toroidal array - the left/right and top/bottom edges are "stiched" together. We are very close to have this working, but there are many cases to consider and we have yet to figure out a solution other than chained if/else statements...which is confusing, to say the least. To switch between behaviours, it only requires calling a different function to get the array of surrounding cells (from which the future state is determined according to the ruleset).
	* **Shape**
		* An interesting addition to CA simulation could be experimenting with different shapes of grids - triangles, circles, or even user-defined shapes. Even more interesting would be different shaped cells, or a 3-D grid. However, this would radically change the computation method - computating boundary behaviour for 3-D, non-rectangluar grids, for example, would be significantly more complicated. Due to the improvements of browser technology, this could (to our knowledge) be written in JavaScript - but writing it ourself could be a pipe dream. This would involve some complex geometry. 
	* **Cell Neighbourhoods**
		* A relatively easy extension is the option for the neighbourhood computation. Currently, _cella_ checks 8 cells - the cardinal directions and the diagonals - and computes the state based upon the rule set. This is known as the Moore neighbourhod. Optionally (e.g. a checkbox on the run CA page), the user could select the von Neumann neighbourhood, which is only the 4 cardinal directions. This would involve creating two separate functions for computing the surrounding cells (the Moore neighbourhood function is in place), and calling either depending on the user input.

* ## Database
	* **Public**
		* Initially, we had hoped to create a publically viewable database. This would be populated by user submissions (anonymous or specified name) of map configurations and rule sets. Currently, the database is in place (using MongoDB), and we DO have drop-down lists that are populated by the local database. But, in reality, it would needed to be hosted on a server, and we would need to create a submission page. **add more to describe how to implement this**

	* **Fields**
		* Adding a rating or feedback field to the public database would be good improvement. Setting this up would essentially create leaderboards - users could see the most popular/interesting rulesets and configurations, and download and run them. A further addition would be editing downloaded configurations/rule sets and re-submitting them. **add more to describe how to implement this possibly**

* ## UI
	* Our page design is simple (as we wanted it), but still plain. Optimally, we would add a more dynamic design. This could be done with AJAX and jQuery UI, for example. It would be more user-friendly if all the pages/options were displayed at the top of the page, and the main body of the page changed depending on user selection. **add more to describe how we are retrieving data, how to do it without needing a new page**