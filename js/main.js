function init(){
        wordCount();
        loadSettings();

}
// Dummy Data Hotkeys //
shortcuts.add('alt+q', function() {
    alert("test");
})

// Toggle Colour Theme //
const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

btn.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
    } else {
        document.body.classList.toggle("dark-theme");
    }
});

// Textarea Auto-Resize //
$(function() {
    $('textarea').each(function() {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    }).on('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
});


// Shortcut: Enable Menu Selection //


// Shortcut: Enable Menu Selection //


// Shortcut: Enable Menu Selection //



// Styling: Writing Tab Indent //


// Styling: Writing Tab Indent //
document.getElementById('text').addEventListener('keydown', function(e) { //listen to  text, and if keydown
    if (e.key == 'Tab') { //tab
        e.preventDefault();
        let start = this.selectionStart;
        let end = this.selectionEnd;
        this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start + 1;
    }
});


// Storage: Save Text Content In Editor //
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

// Open Settings Menu //
function openSettings() {
    document.getElementById("nav").style.width = "100%";
}

// Open Settings Menu //
function closeSettings() {
    document.getElementById("nav").style.width = "0%";
}
// memory counter function //

function localStorageSpace(){
    let allStrings = localStorage.getItem("text");
    let finalcalc = allStrings ? + (((allStrings.length*16)/(8*1024))) + ' KB' : '0 KB';
    $('#memoryCounter').html(finalcalc);

};

// word counter function //
function wordCount(){
    let value = $.trim($('#text').val()),
        words = value.replace(/\s+/gi, ' ').split(' ').length,
        characters = value.length;
    if(!characters)words=0;

    $('#wordCounter').html('<br>'+"W: "+ words +"  C: "+ characters);
    //alert("W: "+ words +"  C: "+ characters);

}
$('textarea').on('input', wordCount);

// turn off word counter //


// Close Settings //



// Settings Option //


// Save Settings //


// Load Settings //
function loadSettings() {
    const cookies = ['fontSize', 'fontFamily', 'darkMode', 'wordCounter', 'copyAll'];
    let loadCookieSettings = true;

    for (let i = 0; i < cookies.length; i++) {
        if (document.cookie.includes(cookies[i])) {
            // cookie exists, do nothing and later move on to load custom settings
        } else {
            // if any one of the cookies is missing
            loadCookieSettings = false;
            break;
        }
    }

    if (loadCookieSettings) {
        console.log('all cookies found');
        // actual loading in settings
        
    } else {
        // one or more cookies not found, generate ALL default cookies
        console.log('one or more cookies missing')
        document.cookie = 'fontSize=20';
        document.cookie = 'fontFamily=Tahoma';
        document.cookie = 'darkMode=true';
        document.cookie = 'wordCounter=true';
        document.cookie = 'copyAll=true';
    }
}

// change font size based on slider //

// turn off word counter //

// turn off memory calculator //

// turn off time //

// time counter //


// Loop: for when you're too lazy to code and just want it to run every sec //


// Loop: for when you're too lazy to code and just want it to run every sec
// Loop runs code every 1 second. useful for things like a live updating clock! Or if you want to spam the alert window... - George Z

(function move() {
    setTimeout(move, 1000);
    localStorageSpace();
})();
