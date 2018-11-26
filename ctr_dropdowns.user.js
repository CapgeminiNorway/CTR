// ==UserScript==
// @name         CTR style
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  fix table styles in CTR-> Week
// @author       Erland
// @match        https://apps.ne.capgemini.com/Applications/CTR/
// @match        https://apps.ne.capgemini.com/Applications/ctr/
// @match        https://apps.ne.capgemini.com/applications/CTR/
// @match        https://apps.ne.capgemini.com/applications/ctr/
// @match        https://apps-x.nordic.capgemini.com/Applications/CTR/
// @match        https://apps-x.nordic.capgemini.com/Applications/ctr/
// @match        https://apps-x.nordic.capgemini.com/applications/CTR/
// @match        https://apps-x.nordic.capgemini.com/applications/ctr/
// @match        https://apps.ne.capgemini.com/Applications//CTR/
// @match        https://apps.ne.capgemini.com/Applications//ctr/
// @grant        none
// ==/UserScript==
var frames = document.getElementsByName("FrameMain");
frames.forEach(function(myFrame){
    var myFrameContent = (myFrame.contentWindow || myFrame.contentDocument);
    myFrame.addEventListener("load", function(event){
        myFrameContent.document.head.innerHTML = myFrameContent.document.head.innerHTML + '<style>tr[style*="display: block;"]{display:table-row !important}</style>';
    });
});

