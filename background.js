
var current_tab;

//Event when click on icon at chrome bar
chrome.browserAction.onClicked.addListener(function(tab) {
  new_tab();
});

function new_tab(){
  chrome.tabs.create({url:"docs/index.html"}, function(tab){
    current_tab = tab;
  });
}

function getword(info,tab) {
  new_tab();
}

chrome.contextMenus.create({
    title: "Bootstrap3.1.1 document", 
    contexts:["all"], 
    onclick: getword,
});