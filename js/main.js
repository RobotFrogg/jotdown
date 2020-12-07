loadSettings();

function init() {
    getTime();
    wordCount();
    focusToggle()

    let settingsArray = document.cookie.split(';');
    for (let i = 0; i < settingsArray.length; i ++) {
        settingsArray[i] = settingsArray[i].trim();
    }

    console.log('all cookies found');

    // load fontSize
    $("#text").css("font-size", settingsArray[5].replace('fontSize=', ''));

    $(".value").text(settingsArray[5].replace('fontSize=', ''));
}

// Toggle Colour Theme //
const toggle = document.getElementById("color-toggle");
//const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme")
    toggleSetting('darkMode');
});

// toggle.addEventListener("click", function () {
//     if (prefersDarkScheme.matches) {
//         document.body.classList.toggle("light-theme");
//     } else {
//         document.body.classList.toggle("dark-theme");
//     }
// });

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

// Styling: Writing Tab Indent //
document.getElementById('text').addEventListener('keydown', function(e) { //listen to  text, and if keydown
    if (e.key == 'Tab') { //tab
        e.preventDefault();
        let start = this.selectionStart;
        let end = this.selectionEnd;
        this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start + 1;
    }
    if (document.getElementById("text").style.height >= "calc(100% - 60px)") {
        document.getElementById("footer").style.position = "relative";
    }
    else {
        document.getElementById("footer").style.position = "fixed";
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
//
// let settingStuff = false;
// let body = document.querySelector("body");
// let settingsMenu = document.getElementById("nav");
//
// body.addEventListener("click", function() {
//     if (settingStuff) {
//         closeSettings();
//     }
// }, false);
// settingsMenu.addEventListener("click", function(ev) {
//     if (settingStuff) {
//         ev.stopPropagation();
//     }
// }, false);

// Open Settings Menu //
function openSettings() {
    document.getElementById("nav").style.width = "100%";
    settingStuff = true;
}

// Close Settings Menu //
function closeSettings() {
    document.getElementById("nav").style.width = "0%";
}

// word counter function //
function wordCount(){
    let value = $.trim($('#text').val()),
        words = value.replace(/\s+/gi, ' ').split(' ').length,
        characters = value.length;
    if(!characters)words=0;

    $('#wordCounter').html("W: "+ words +"  C: "+ characters);
    //alert("W: "+ words +"  C: "+ characters);

}
$('textarea').on('input', wordCount);



//shortcut settings menu//
shortcuts.add('alt+q', function() {
    if ($('.settings').css('width') <= '10px') {
        openSettings();
    } else if ($('.settings').css('width') >= '10px') {
        closeSettings();
    }
})

// Settings Option //

// Save Settings //
// not all saving code here, cookies will be updated live whenever changes are made (ex. changing font size)
// save darkMode preference
function toggleSetting(setting) {

    // setup an cleaner array for easier access
    let settingsArray = document.cookie.split(';');
    for (let i = 0; i < settingsArray.length; i ++) {
        settingsArray[i] = settingsArray[i].trim();
    }

    // toggle the cookie
    if (settingsArray.includes(setting + '=true')) {
        document.cookie = setting + '=false';
    } else {
        document.cookie = setting + '=true';
    }
}

// Load Settings //
function loadSettings() {
    const cookies = ['fontSize', 'fontFamily', 'darkMode', 'wordCounter', 'timeEnabled', 'hideAll'];
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
        // setup an cleaner array for easier access
        let settingsArray = document.cookie.split(';');
        for (let i = 0; i < settingsArray.length; i ++) {
            settingsArray[i] = settingsArray[i].trim();
        }

        console.log('all cookies found');

        // load fontSize
        $("#text").css("font-size", settingsArray[5].replace('fontSize=', ''));

        $(".value").text(settingsArray[5].replace('fontSize=', ''));


        // load fontFamily
        /*set font family here = */ //settingsArray[2].replace('fontFamily', '');

        // load darkMode
        if (settingsArray.includes('darkMode=true')) {
            document.body.classList.toggle("dark-theme");
            document.getElementById('darkmode-checkbox').checked = true;
        }

        // load wordCounter
        if (settingsArray.includes('wordCounter=true')) {
            // probs nothing jsut show it
        } else {
            // hide the work counter somehow
        }

        // load timeEnabled
        if (settingsArray.includes('timeEnabled=true')) {
            // probs nothing just show it
        } else {
            // hide the work counter somehow
        }

        // load hideAll


    } else {
        // one or more cookies not found, generate ALL default cookies
        console.log('one or more cookies missing')
        document.cookie = 'fontSize=20'; // might have to dynamically take from their screen size here ////////////////////////////////
        document.cookie = 'fontFamily=Source Code Pro';
        document.cookie = 'darkMode=false';
        document.cookie = 'wordCounter=true';
        document.cookie = 'timeEnabled=true';
        document.cookie = 'hideAll=false';
    }
}

// change font size based on slider //

//turn everything off aka focus mode//

shortcuts.add('alt+w', function() {
    focusToggle();
})
let hideall = false;
function focusToggle() {
    let element = document.getElementById("clock");
    let element1 = document.getElementById("wordCounter");
    let element2 = document.getElementById("settingsBtn");
    let element3 = document.getElementById("color-toggle");

    if (hideall == true) {
        element.classList.remove("visible");
        element.classList.add("hidden");
        element1.classList.remove("visible");
        element1.classList.add("hidden");
        element2.classList.remove("visible");
        element2.classList.add("hidden");
        element3.classList.remove("visible");
        element3.classList.add("hidden");
        hideall = false;
    }else if(hideall==false){
        element.classList.remove("hidden");
        element.classList.add("visible");
        element1.classList.remove("hidden");
        element1.classList.add("visible");
        element2.classList.remove("hidden");
        element2.classList.add("visible");
        element3.classList.remove("hidden");
        element3.classList.add("visible");
        hideall = true;
    }
}

// get time //
function getTime() {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes();
    let dateTime = date + ' ' + time;
    $('#clock').html(dateTime);
}

//size changer
$(function() {
    $("#range-slider").on("input change", function () {
        $("#text").css("font-size", $(this).val() + "px");
        document.cookie = 'fontSize=' + $(this).val() + 'px';
        $(".value").text($(this).val() + "px");
    });
});



// time counter //

// Loop: for when you're too lazy to code and just want it to run every sec //

// Loop runs code every 1 second. useful for things like a live updating clock! Or if you want to spam the alert window... - George Z

(function move() {
    setTimeout(move, 1000);
    getTime();
})();

