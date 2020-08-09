// A generic onclick callback function.  
function genericOnClick(info, tab) {  
    console.log("item " + info.menuItemId + " was clicked");  
    console.log("info: " + JSON.stringify(info));  
    console.log("tab: " + JSON.stringify(tab));  
}  

// 被点击触发的函数
function markOnClick(info, tab) {  
    console.log("radio item " + info.menuItemId +  
                " was clicked (previous checked state was "  +  
                info.wasChecked + ")");  
}  

let marked = chrome.contextMenus.create({"title": "Marked", "type": "radio",  
                                           "onclick":markOnClick});  
let unmarked = chrome.contextMenus.create({"title": "Unmarked", "type": "radio",  
                                           "onclick":markOnClick});  
console.log("Marked:" + marked + " Unmarked:" + unmarked);  
    
    
// Intentionally create an invalid item, to show off error checking in the  
// create callback.  
console.log("About to try creating an invalid item - an error about " +  
            "item 999 should show up");  
chrome.contextMenus.create({"title": "Oops", "parentId":999}, function() {  
    if (chrome.extension.lastError) {  
      console.log("Got expected error: " + chrome.extension.lastError.message);  
    }  
});  