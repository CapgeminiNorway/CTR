// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  fix table styles in CTR-> Week
// @author       Erland
// @match        https://apps.ne.capgemini.com/Applications/CTR/
// @grant        none
// ==/UserScript==

var frames = document.getElementsByName("FrameMain");
frames.forEach(function(myFrame){
    var myFrameContent = (myFrame.contentWindow || myFrame.contentDocument);
    myFrame.addEventListener("load", function(event){
        myFrameContent.document.head.innerHTML = myFrameContent.document.head.innerHTML + '<style>tr[style*="display: block;"]{display:table-row !important}</style>';
    });
});



