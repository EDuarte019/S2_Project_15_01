"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Evelyn Duarte 
   Date:  04.18.19 
   
   Filename: mpl_links.js

*/
//added an event listener for when the page is loaded with an anonymous function.
window.addEventListener("load", function () {
    //an allSelect variable that with get the govLinks form when selected.
    var allSelect = document.forms.govLinks;
    //Created a for loop for the all select. Then set the onchange event equal to the function of events set to target the event object value of the onchange event.
    for (var i = 0; i < allSelect.length; i++) {
        allSelect[i].onchange = function (e) {
            window.location.href = e.target.value;
        }
    }
});