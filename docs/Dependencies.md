------------
# Dependencies
------------

* ## Express
	* **Description**
		* Minimal web application framework for node.js; built on Connect
	* **Usage**
		* Simply put, Cella uses Express on top of node to serve static pages. It is very light-weight, and, most importantly, easy-to-use. It helps organize/manage the web application - i.e. routing, handling request/views (HTML pages), etc.
	
	* **Licensing**
		* MIT license (http://opensource.org/licenses/MIT)

* ## MongoDB
	* **Description**
		* NoSQL document database; written in C++; high performance, easy scalability
	* **Usage**
		* Cella uses MongoDB to store user-made map configurations and rulesets. We chose MongoDB due to great support for JavaScript (i.e. mapping the documents to a data type). Furthermore, it works very well with node.js/express. The schemeless nature of MongoDB allows for flexibility when storing data. For our project, the data is stored as 2D arrays of integers, simplifying parsing upon retrieval. 
	* **Licensing**
		* Free Software Foundation's GNU AGPL v3.0 (http://www.gnu.org/licenses/agpl-3.0.html)

* ## jQuery
	* **Description**
		* JavaScript library for HTML document traversal/manipulation and event handling
	* **Usage**
		* Cella uses jQuery for access and modification of HTML document elements - e.g. adding button labels, appending tables, changing button colour on click, etc. It provides a very simple and easy-to-use API, and is very helpful when modifying HTML tables (used to display cellular automata).
	* **Licensing**
		* MIT license (http://opensource.org/licenses/MIT)
