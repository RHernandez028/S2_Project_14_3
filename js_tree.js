"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 3

   Author: Gabriel Hernandez
   Date: 4/5/19

   Filename: js_tree.js

   Global Variables:
   nodeCount
      Running count of all nodes in the source document
   elementCount
      Running count of all element nodes in the source document
   textCount
      Running count of all text nodes in the source document
   wsCount
      Running count of all white space text nodes in the source document


   Functions List:
   makeTree() 
      Sets up and places the node tree within the HTML document and
      displays the node counts from the document

   makeBranches(treeNode, nestedList)
      Makes a list item or an ordered list based on the contents and type
      of node from the sourceNode parameter and then appends that list
      item or ordered list to nestedList. The function recursively calls 
      itself to navigate throught the node tree of the source document.

   isWhiteSpaceNode(tString)
      Returns true if tString represents the text of a white space text
      node and false if it doesn't
*/
//keep track of total count of nodes, element nodestext nodes, white-space nodes
var nodeCount = 0;
var elemCount = 0;
var textCount = 0;
var wsCount = 0;

window.addEventListener("load", makeTree);

function makeTree() {
      var treeBox = document.createElement("aside");
      treeBox.setAttribute("id");
      var 
}




function isWhiteSpaceNode(tString) {
   return !(/[^\t\n\r ]/.test(tString));
}
