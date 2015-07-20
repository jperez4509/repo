var stringArray = [];

function userPrompt(){
    var userInput = prompt('Please enter a sentece.');
    stringArray.push(userInput);
}

userPrompt();

var left = document.querySelector("#left");
var p = document.createElement('p');

left.appendChild(p).textContent = stringArray;


//
//var h1 = document.getElementById("myHdr");
//console.log(h1);
//
//var hasClass = h1.hasAttribute("class");
//console.log("The h1 tag has a class attribute: ", hasClass);
//
//h1.setAttribute("rel", "something");
//var hasRel = h1.hasAttribute("rel");
//console.log("The h1 tag has a rel attribute: ", hasRel);
//
//var anchors = document.querySelectorAll("ul li a");
//console.log(anchors);
//console.log(anchors.length);
//
//for (var i = 0; i < anchors.length; i++) {
//    var anchor = anchors.item(i);
//    console.log(anchor.href);
//}