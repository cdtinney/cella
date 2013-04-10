----------
# Cella
----------

## by: KnightsWhoSayNi

### Adam Bennett (#100852702), Colin Tinney (#100852617), Brayden Girard (dropped)

## summary

Cella is a web application for displaying, running, and editing cellular automata. Cellular automata are 1 to N dimensional grids of cells that consist of states, coupled with a set of rules describing how the states of the cells should behave depending on the states of surrounding cells. Our project has limited package dependicies - only express (node.js web application framework) and MongoDB (NoSQL document database) are used. Express is used to serve static web pages in combination with plain JavaScript code for running, editing, loading, and saving cellular automta. MongoDB is used to store user-made configurations and rule sets.

## how to use cella

From the main page there are 3 options. The first option, run a CA, prompts you to select an initial configuration (also known as a map) and a ruleset. The initial configuration specifies which state each cell starts in. The ruleset specifies what the state of a cell changes to after each tick, based on the states of its neighbours. Any map can be run with any ruleset, although they may not do much if they are not designed for each other.

The second option allows you to create custom initialization configurations. Click on a cell to change its state, and continue clicking until it is the desired state. When you are done, enter a name for the configuration and press save. Also note that you may increase the number of cells, either by adding rows (increase height button) or columns (increase width button)

The third option allows the creation of custom rulesets. You may have as many rules as you want, add one by pressing the add rule button. Adding a rule will make a row of buttons and a dropdown appear. This represents one rule. Each tick, every rule will change any cells with the 'target' state and specified number of neighbour cells with the 'surrounding' state to the 'result' state.

## notes

MongoDB is included and configured in our repository.
