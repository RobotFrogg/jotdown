// Textarea Auto-Resize

let observe;
if (window.attachEvent) {
    observe = function (element, event, handler) {
        element.attachEvent('on'+event, handler);
    };
}
else {
    observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
    };
}
function init () {
    var text = document.getElementById('text');
    function resize () {
        text.style.height = 'auto';
        text.style.height = text.scrollHeight+'px';
    }
    /* 0-timeout to get the already changed text */
    function delayedResize () {
        window.setTimeout(resize, 0);
    }
    observe(text, 'change',  resize);
    observe(text, 'cut',     delayedResize);
    observe(text, 'paste',   delayedResize);
    observe(text, 'drop',    delayedResize);
    observe(text, 'keydown', delayedResize);

    text.focus();
    text.select();
    resize();
}

//
// Shortcut: Enable Menu Selection
//

//
// Shortcut: Enable Menu Selection
//

//
// Styling: Writing Tab Indent
//

//
// Storage: Save Text Content In Editor
//

//write to local storage

//read local storage

//
// Open Settings Menu
//

//
// Close Settings
//

//
// Settings Option
//

//change font size based on slider

//turn off word counter

//turn off memory calculator

//turn off time

//time counter

//
// Loop: for when you're too lazy to code and just want it to run every sec
//
