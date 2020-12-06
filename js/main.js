function init(){

}


// Textarea Auto-Resize
$(function() {
    $('textarea').each(function() {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    }).on('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
});


//
// Shortcut: Enable Menu Selection
//

//
// Shortcut: Enable Menu Selection
//

//
// Styling: Writing Tab Indent
//
document.getElementById('text').addEventListener('keydown', function(e) { //listen to  text, and if keydown
    if (e.key == 'Tab') { //tab
        e.preventDefault();
        let start = this.selectionStart;
        let end = this.selectionEnd;
        this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start + 1;
    }
});

//
// Storage: Save Text Content In Editor
//
let textarea = document.getElementById("text");
textarea.addEventListener('input', writeLocalStorage);

function writeLocalStorage() {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("text", textarea.value);
    } else {
        document.getElementById("err").innerHTML = "Localstorage not supported";
    }
}

function readLocalStorage() {
    if (typeof(Storage) !== "undefined") {
        textarea.value = localStorage.getItem("text");
    } else {
        document.getElementById("err").innerHTML = "Localstorage not supported";
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", readLocalStorage);
} else {
    readLocalStorage();
}
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
// Loop runs code every 1 second. useful for things like a live updating clock! Or if you want to spam the alert window... - George Z

(function move() {
    setTimeout(move, 1000);
})();