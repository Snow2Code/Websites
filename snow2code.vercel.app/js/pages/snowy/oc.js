/* Copy of Site/js/pages/snowy/lore.js */
/* Edited from Site/js/pages/snowy/lore.js */


const buttonsArray = {
    "info": { "id": "Info", "text": "Info"},
    "afraid": { "id": "Afraid and Not Afraid to do", "text": "Afraid and Not Afraid to do"},
};

/**
  To add:
    Snowy's Preferences
    Snowy might identify with a slight inclination toward masochism, as she enjoys experiencing certain kinds of pain. This characteristic adds complexity to her personality, blending with her playful and chaotic nature.
*/

function hideAll() {
    const loreDiv = document.getElementById('oc-shit');
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
        newButton.textContent = buttonData.text;

        buttonsContainer.appendChild(newButton);
    }
}

const buttons = buttonsContainer.querySelectorAll('button');
let prevContent = null;
let currentContent = null;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (`${document.getElementById(button.id)} Persona/Main OC/Mascot Content`) {
            const content = document.getElementById(`${button.id} Persona/Main OC/Mascot Content`);
            
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
        }
    })
});

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
