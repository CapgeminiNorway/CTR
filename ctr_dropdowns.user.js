// ==UserScript==
// @name         CTR Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  fix dropdowns in CTR-> My Reports
// @author       Erland
// @match        https://apps.ne.capgemini.com/Applications/CTR/
// @match        https://apps.ne.capgemini.com/applications/CTR/
// @match        https://apps-x.nordic.capgemini.com/applications/CTR/
// @match        https://apps.ne.capgemini.com/Applications//CTR/
// @grant        none

// ==/UserScript==
window.onload = function() {
    var frames = document.getElementsByName("FrameMain");
    frames.forEach(function(myFrame){
        var myFrameContent = (myFrame.contentWindow || myFrame.contentDocument);
        var buttons = myFrameContent.document.body.querySelectorAll("button.fieldtxt3");
        buttons.forEach(function(element){
            element.addEventListener("click", function(event){
                event.preventDefault();
            });
        });
    });
}
