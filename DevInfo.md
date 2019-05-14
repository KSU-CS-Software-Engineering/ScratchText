# Scratch Text
Scratch Text is a project intended to add a text based aspect to [Scratch 3.0](https://scratch.mit.edu/). This extension will create a smoother transition for younger developers who are used to using Scratch and wish to learn how to program their projects in a text based format.

## Files we have code in: 
gui.jsx (from inside components not containers), 
icon--text.svg, 
text-editor.jsx, 
text-tab.jsx,

## How to run once installed
#### In the terminal:
npm install (might not need this step) -> 
npm start -> 
then open your localhost tab in a browser

## General flow of our code
In the GUI.jsx, we implemented code to show a new tab in the list of tabs.
It pulls in an svg file which holds the icon that we designed for the tab.
When clicked on, the tab will render our text tab component from the 
text-tab.jsx, and that contains the text-editor.jsx component. 

The block conversion happens when a JSON file is sent to signify the placement 
of a block. That JSON file can be read to see the type, contents, and setting
of a block, so that its information can be fully represented by text.

## The tenants of the scratch text language
Language and formatting are simple, and match the blocks.
Text Wording is directly representative of block wording.
Colors match color of the corresponding blocks.
No brackets, just spacing.

The goal is to create a language which looks as similar to
the blocks as possible in text form, allowing for the 
most simply mental leap possible from the block -> text jump.

##

