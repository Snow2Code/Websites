const buttonsArray = {
    "Snowy's Origins": { "id": "Snowy's Origins", "id_content": "Snowy's Origins Content", "text": "Snowy's Origins" },
    "Snowy's Cleaning Habits": { "id": "Snowy's Cleaning Habits", "id_content": "Snowy's Cleaning Habits Content", "text": "Snowy's Cleaning Habits" },
    "Snowy's Past": { "id": "Snowy's Past", "id_content": "Snowy's Past Content", "text": "Snowy's Past" },
    "Snowy's Languages": { "id": "Snowy's Languages", "id_content": "Snowy's Languages Content", "text": "Snowy's Languages" },
    "Early Life and ADHD": { "id": "Early Life and ADHD", "id_content": "Early Life and ADHD Content", "text": "Early Life and ADHD" },
    "Aroace Identity": { "id": "Aroace Identity", "id_content": "Aroace Identity Content", "text": "Aroace Identity" },
    "Snowy's Boundaries": { "id": "Snowy's Boundaries", "id_content": "Snowy's Boundaries Content", "text": "Snowy's Boundaries" },
    "Flustered and Confused Moments": { "id": "Flustered and Confused Moments", "id_content": "Flustered and Confused Moments Content", "text": "Flustered and Confused Moments" },
    "Snowy's Mental Health": { "id": "Snowy's Mental Health", "id_content": "Snowy's Mental Health Content", "text": "Snowy's Mental Health" },
    "Song Lyrics That Relate to Snowy": { "id": "Song Lyrics That Relate to Snowy", "id_content": "Song Lyrics That Relate to Snowy Content", "text": "Song Lyrics That Relate to Snowy"},
    "Episodes and Emotional Turmoil": { "id": "Episodes and Emotional Turmoil", "id_content": "Episodes and Emotional Turmoil Content", "text": "Episodes and Emotional Turmoil [Content Warning]" },
    "Depression and Internal Struggles": { "id": "Depression and Internal Struggles", "id_content": "Depression and Internal Struggles Content", "text": "Depression and Internal Struggles [Content Warning]" },
    "Pain and Coping Mechanisms": { "id": "Pain and Coping Mechanisms", "id_content": "Pain and Coping Mechanisms Content", "text": "Pain and Coping Mechanisms" },
    "Trust and Emotional Responses": { "id": "Trust and Emotional Responses", "id_content": "Trust and Emotional Responses Content", "text": "Trust and Emotional Responses" },
    "Emotional Vulnerability and Trust Issues": { "id": "Emotional Vulnerability and Trust Issues", "id_content": "Emotional Vulnerability and Trust Issues Content", "text": "Emotional Vulnerability and Trust Issues" },
    "Snowy's Likes": { "id": "Snowy's Likes", "id_content": "Snowy's Likes Content", "text": "Snowy's Likes" },
    "Snowy's Drawer and Special Items": { "id": "Snowy's Drawer and Special Items", "id_content": "Snowy's Drawer and Special Items Content", "text": "Snowy's Drawer and Special Items [Content Warning]" },
    "Mood and Music": { "id": "Mood and Music", "id_content": "Mood and Music Content", "text": "Mood and Music [Content Warning]" },
    "Snowy's Music Choices": { "id": "Snowy's Music Choices", "id_content": "Snowy's Music Choices Content", "text": "Snowy's Music Choices" },
    "Relationship with Cone": { "id": "Relationship with Cone", "id_content": "Relationship with Cone Content", "text": "Relationship with Cone [Content Warning]" },
    "Spelling and Text Habits": { "id": "Spelling and Text Habits", "id_content": "Spelling and Text Habits Content", "text": "Spelling and Text Habits" },
    "Meowing Habit": { "id": "Meowing Habit", "id_content": "Meowing Habit Content", "text": "Meowing Habit" },
    "Femboy Phase": { "id": "Femboy Phase", "id_content": "Femboy Phase Content", "text": "Femboy Phase" },
    "Femboy Phase Update": { "id": "Femboy Phase Update", "id_content": "Femboy Phase Update Content", "text": "Femboy Phase [Update]" },
    "Snowy's Appearance and Changing Fur": { "id": "Snowy's Appearance and Changing Fur", "id_content": "Snowy's Appearance and Changing Fur Content", "text": "Snowy's Appearance and Changing Fur [Content Warning]" },
    "Snowy's Tail and Fluff": { "id": "Snowy's Tail and Fluff", "id_content": "Snowy's Tail and Fluff Content", "text": "Snowy's Tail and Fluff" },
    "Snowy's Identity": { "id": "Snowy's Identity", "id_content": "Snowy's Identity Content", "text": "Snowy's Identity" },
    "Snowy's Personality": { "id": "Snowy's Personality", "id_content": "Snowy's Personality Content", "text": "Snowy's Personality" },
    "Snowy's Personalities": { "id": "Snowy's Personalities", "id_content": "Snowy's Personalities Content", "text": "Snowy's Personalities" },
    "Snowy's Gender and Pronouns Content": { "id": "Snowy's Gender and Pronouns", "id_content": "Snowy's Gender and Pronouns Content", "text": "Snowy's Gender and Pronouns" },
    "Furry Fandom and Fursonas": { "id": "Furry Fandom and Fursonas", "id_content": "Furry Fandom and Fursonas Content", "text": "Furry Fandom and Fursonas" },
    "Silly Bits": { "id": "Silly Bits", "id_content": "Silly Bits Content", "text": "Silly Bits" },
    "Additional Confirmations": { "id": "Additional Confirmations", "id_content": "Additional Confirmations Content", "text": "Additional Confirmations" },
    "Claims and Mysteries": { "id": "Claims and Mysteries", "id_content": "Claims and Mysteries Content", "text": "Claims and Mysteries" },
    "Hearing Sensitivity": { "id": "Hearing Sensitivity", "id_content": "Hearing Sensitivity Content", "text": "Hearing Sensitivity" },
    "Final Thoughts": { "id": "Final Thoughts", "id_content": "Final Thoughts Content", "text": "Final Thoughts [Content Warning]" }
};

/**
  To add:
    Snowy's Preferences
    Snowy might identify with a slight inclination toward masochism, as she enjoys experiencing certain kinds of pain. This characteristic adds complexity to her personality, blending with her playful and chaotic nature.
*/

function hideAll() {
    const loreDiv = document.getElementById('lore-shit');
    const children = loreDiv.children;

    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        
        if (child.classList.contains("text") || child.classList.contains("hidden") || child.classList.contains("shown")) {
            child.classList.remove('shown');
            child.classList.add('hidden');
        }
    }
}


function showPopup(message, callback) {
    const popup = document.getElementById("customPopup");
    const messageElement = document.getElementById("popupMessage");

    messageElement.textContent = message;
    popup.classList.remove("hidden");
    window.proceedCallback = callback;
}

function closePopup() {
    const popup = document.getElementById("customPopup");
    popup.classList.add("hidden");
    window.proceedCallback = null;
}

function proceed() {
    if (typeof window.proceedCallback === "function") {
        window.proceedCallback();
    }
    closePopup();
}

const buttonsContainer = document.getElementById('buttons');
const loreSections = document.querySelectorAll('#long-lore h3');
const loreDiv = document.getElementById('lore-shit');


for (const [key, buttonData] of Object.entries(buttonsArray)) {
    if (buttonsArray.hasOwnProperty(key)) {
        const existingButton = document.getElementById(buttonData.id);
        if (existingButton) continue;

        const newButton = document.createElement('button');
        newButton.id = buttonData.id;
        newButton.id_content = buttonData.id_content
        newButton.textContent = buttonData.text;

        buttonsContainer.appendChild(newButton);
    }
}

const buttons = buttonsContainer.querySelectorAll('button');
let prevContent = null;
let currentContent = null;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (document.getElementById(button.id_content)) {
            const content = document.getElementById(button.id_content);
            
            hideAll();
            if (prevContent !== null) {
                prevContent.classList.remove('shown');
                prevContent.classList.add('hidden');
            }

            if (currentContent !== null) {
                currentContent.classList.remove('shown');
                currentContent.classList.add('hidden');
            }
            prevContent = content
            currentContent = content

            content.classList.remove('hidden');
            content.classList.add('shown');
        } else {
            if (button.id == "Song Lyrics Relating to Snowy") {
                console.log("fun time");
                const songSnowyContent = document.getElementById("Song Lyrics That Relate to Snowy Content");
                
                hideAll();
                if (prevContent !== null) {
                    prevContent.classList.remove('shown');
                    prevContent.classList.add('hidden');
                }
    
                if (currentContent !== null) {
                    currentContent.classList.remove('shown');
                    currentContent.classList.add('hidden');
                }
                prevContent = songSnowyContent
                currentContent = songSnowyContent
    
                songSnowyContent.classList.remove('hidden');
                songSnowyContent.classList.add('shown');
            }
        }
    })
});

/*
for (let i = 0; i < children.length; i++) {
    const child = children[i];
    
    newButton.onclick = (function (data) {
        if (data.id_content === child.id) {
            console.log(`[Lore] ${child.id} is equal to ${data.id_content}`);
            hideAll();
            child.classList.remove('hidden');
            child.classList.add('shown');
            if (child.classList.contains('shown')) {
                child.classList.remove('shown');
                child.classList.add('hidden');
            } else {
                child.classList.remove('hidden');
                child.classList.add('shown');
            }
        }
    });
}
*/


document.querySelectorAll('.content-warning-section').forEach(section => {
    const button = section.querySelector('.toggle-content-button');
    const content = section.querySelector('.hidden-content');
    const warning = section.getAttribute('data-warning');

    button.addEventListener('click', () => {
        if (content.style.display === 'block') {
            content.style.display = 'none';
            button.textContent = `Show Content`;
        } else {
            showPopup(
                "This section contains sensitive content. Do you wish to proceed?",
                () => {
                    
                    console.log(`user proceeded.`);
                    content.style.display = 'block';
                    button.textContent = `Hide Content`;
                }
            );
        }
    });
});

const selectedLyric = document.getElementById('lyrics-selected');
const lyricSections = {
    "Depressive": "/snowy/lyrics/Depressive",
    "Depressive Maybe": "/snowy/lyrics/Depressive Maybe",
    "Neutral": "/snowy/lyrics/Neutral",
    // "Love & Relationships": "/snowy/lyrics/Love & Relationships",
    "Silly & Chaotic": "/snowy/lyrics/Silly & Chaotic",
    // "Empowering & Resilient": "/snowy/lyrics/Empowering & Resilient",
    "Mysterious & Thoughtful": "/snowy/lyrics/Mysterious & Thoughtful",
    "Miscellaneous": "/snowy/lyrics/Miscellaneous",
};

function createLyricButtons() {
    selectedLyric.innerHTML = "";
    const buttonContainer = document.getElementById('lyric-buttons');
    Object.keys(lyricSections).forEach(section => {
        const button = document.createElement('button');
        button.textContent = section;
        button.onclick = () => loadLyrics(section);
        buttonContainer.appendChild(button);
    });
}

function loadLyrics(section) {
    const contentDiv = document.getElementById('lyric-content');
    contentDiv.innerHTML = "";
    selectedLyric.innerHTML = "";
    const sectionPath = lyricSections[section];

    fetch(`${sectionPath}/lyrics.js`)
        .then(response => response.json())
        .then(data => {
            Object.entries(data).forEach(([artist, songs]) => {
                console.log(artist);
                Object.entries(songs).forEach(([title, info]) => {
                    const songDiv = document.createElement('div');
                    songDiv.className = "song-lyrics";
                    songDiv.innerHTML = `
                        <h3>${artist} - ${title}</h3><br><br>
                        <button onclick="fetchLyrics('${sectionPath}/${artist} - ${title}.txt', '${artist}', '${title}')">View Lyrics</button>
                    `;
                    // <p><b>Reason:</b> ${info.reason}</p> /* after artist title */
                    contentDiv.appendChild(songDiv);
                });
            });
        });
}

function fetchLyrics(path, artist, songTitle) {
    fetch(path)
        .then(response => response.text())
        .then(lyrics => {
            const contentDiv = document.getElementById('lyric-content');
            const lyricDisplay = document.createElement('div');
            lyricDisplay.className = "lyric-display";
            lyricDisplay.id = "snowy-song-lyric-display";
            lyricDisplay.textContent = lyrics;
            lyricDisplay.style.backgroundColor = "transparent";
            contentDiv.innerHTML = "";
            if (document.getElementById('snowy-song-lyric-display')) {
                const lyricDisplaySnow = document.getElementById('snowy-song-lyric-display');
                lyricDisplaySnow.remove();
            }
            contentDiv.appendChild(lyricDisplay);
            selectedLyric.innerHTML = `Selected ${songTitle} by ${artist}`;
        });
}

window.onload = createLyricButtons;



/*
new
const curseWords = ["fuck"];
const censorshipButton = document.getElementById("toggle-censorship");
let censored = localStorage.getItem("snow-lore-censorship");

function censorshipUpdate()
{
    localStorage.getItem("snow-lore-censorship") = !localStorage.getItem("snow-lore-censorship")
    censored = !censored
}

if (censored == undefined || censored == null) {
    censorshipUpdate();
}


function toggleCensorship() {
    censored.current = !censored.current;

    console.log(censored.current)

    if (censored.current == true)
    {
        censored.current_string = "on";
    } else {
        censored.current_string = "off";
    }

    const censorshipElements = document.querySelectorAll("#censorship");

    if (censored.current == true)
    {
        censorshipElements.forEach(el => {
            curseWords.forEach(curseWord => {
                const regex = new RegExp(`\\b${curseWord}\\b`, 'gi');
                let replaceText = el.innerHTML.replace(regex, match => { return match[0] + curseWord.toUpperCase().slice(+1); });

                if (el.innerHTML.includes("everyone~"))
                {
                    el.innerHTML = el.innerHTML.replace(regex, match => {
                        return match[0] + "*".repeat(match.length - 2) + curseWord.slice(-1);
                    });
                } else {
                    el.innerHTML = replaceText
                }
            });
        });
    } else {
        censorshipElements.forEach(el => {
            curseWords.forEach(curseWord => {
                const regex = new RegExp(`\\b${curseWord}\\b`, 'gi');
                let replaceText = el.innerHTML.replace(regex, match => { return match[0] + "*".repeat(match.length - 2) + curseWord.toUpperCase().slice(-1); });
                if (el.innerHTML.includes("everyone~"))
                {
                    el.innerHTML = el.innerHTML.replace(regex, match => {
                        return match[0] + "*".repeat(match.length - 2) + curseWord.slice(-1);
                    });
                } else {
                    el.innerHTML = replaceText
                }
                
            });
        });
    }
}

window.onload = function() {
    console.log("mwe");

    if (censored.current == null) {
        censored.current = censored.default;
    } else {
        censored.current = localStorage.getItem("snow-lore-censorship");
    }

    toggleCensorship();

    censorshipButton.addEventListener("click", toggleCensorship);

    const entries = performance.getEntriesByType("navigation");
    if (entries.length > 0 && entries[0].type === "reload") {
        localStorage.setItem("snow-lore-censorship", censored.current);
    }
}

const toggleCensorship = document.getElementById("toggle-censorship");

let isCensored_Default = true;
let isCensored = localStorage.getItem("snow-lore-censorship");

const toggleCurseWords = () => {
    console.log("a");
    const elements = document.querySelectorAll("#censorship");
    isCensored = !isCensored_Default;
    toggleCensorship.textContent = `Censor Curse Words: ${isCensored ? "ON" : "OFF"}`;

    elements.forEach(el => {
        if (isCensored) {
            el.textContent = el.textContent[0] + "*".repeat(el.textContent.length - 1);
        }
    });

    localStorage.setItem("snow-lore-censorship", isCensored ? "on" : "off");
};

toggleCensorship.addEventListener("click", toggleCurseWords);

// Load Preferences
const savedCensorship = localStorage.getItem("snow-lore-censorship") || "on";

isCensored = savedCensorship === "on";
toggleCensorship.textContent = `Censor Curse Words: ${isCensored ? "ON" : "OFF"}`;

toggleCurseWords();
*/