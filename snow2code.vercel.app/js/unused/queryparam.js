const params = {
    "info": {
        help: "param_help",
        paramhelp: "param_help",
        accounts: "accounts",
        forfren_forfun: "forfren_forfun",
        some_infos: "some_infos",
        nicknames: "nicknames",
        addit_info: "auddit_info",
        goals: "goals",
        compgoals: "compgoals",
        compgoalsnonplanned: "compgoalsnonplanned",
        misc: "misc",
        listentomusic: "listentomusic",
        shitmade: "shitemade",
        whatisfurry: "whatisfurry"
    },
    "relationship": {
        snowcone: "snowship snowcone"
    },
    "lore": {
        // help: "param_help",
        // paramhelp: "param_help",
        
        snowys_origins: "Snowy's Origins Content",
        Snowys_cleaning_habits: "Snowy's Cleaning Habits Content",
        snowys_past: "Snowy's Past Content",
        snowys_languages: "Snowy's Languages Content",
        early_life_and_adhd: "Early Life and ADHD Content",
        aroace_identity: "Aroace Identity Content",
        Snowys_Boundaries: "Snowy's Boundaries Content",
        snowys_boundaries: "Snowy's Boundaries Content",
        flustered_and_confused_momments: "Flustered and Confused Moments Content",
        snowys_mental_health: "Snowy's Mental Health Content",
        song_lyrics: "Song Lyrics That Relate to Snowy Content",
        episodes_and_emotional_turmoil: "Episodes and Emotional Turmoil Content",
        depression_and_internal_struggles: "Depression and Internal Struggles Content",
        pain_and_coping_mechanisms: "Pain and Coping Mechanisms Content",
        trust_and_emotional_responses: "Trust and Emotional Responses Content",
        emotional_vulnerability_and_trust_issues: "Emotional Vulnerability and Trust Issues Content",
        snowys_likes: "Snowy's Likes Content",
        snowys_drawer_and_special_items: "Snowy's Drawer and Special Items Content",
        mood_and_music: "Mood and Music Content",
        snowys_music_choices: "Snowy's Music Choices Content",
        relationship_with_cone: "Relationship with Cone Content",
        spelling_and_text_habits: "Spelling and Text Habits Content",
        meowing_habit: "Meowing Habit Content",
        femboy_phase: "Femboy Phase Content",
        femboy_phase_update: "Femboy Phase Update Content",
        snowys_appearance_and_changing_fur: "Snowy's Appearance and Changing Fur Content",
        snows_tail_and_fluff: "Snowy's Tail and Fluff Content",
        snowys_identity: "Snowy's Identity Content",
        snowys_personality: "Snowy's Personality Content",
        snowys_personalities: "Snowy's Personalities Content",
        snowys_gender_and_pronouns: "Snowy's Gender and Pronouns Content",
        furry_fandom_and_fursonas: "Furry Fandom and Fursonas Content",
        silly_bits: "Silly Bits Content",
        additional_confirmation: "Additional Confirmations Content",
        miscellaneous_traits: "Miscellaneous Traits Content",
        claims_and_mysteries: "Claims and Mysteries Content",
        hearing_sensitivity: "Hearing Sensitivity Content",
        final_thoughts: "Final Thoughts Content"
    }
};

function getParam(param)
{
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.getAll(param);
}

function doSomeShit(page, pageSub, id)
{
    if (page == "lore") {
        const targetDivId = params[page.replace("/pages", "pages")][id];
        const loreContent = document.getElementById("lore-shit").querySelectorAll("div");
        const loreButtons = document.getElementById("buttons");
        const loreContentText = document.getElementById("content-text");


        loreContent.forEach(div => {
            if (div.id !== targetDivId)
            {
                div.style.display = "none";
            } else {
                loreButtons.style.display = "none";
                loreContentText.innerHTML = `Showing content of ${String(div.id).replace(" Content", "")}`
                loreContentText.style.display = "block";
                div.style.display = "block";
            }
        });
    } else {
        const targetDivId = params[page.replace("/pages", "pages")][id];
        const allDivs = document.querySelector("section.intro").querySelectorAll("div");

        allDivs.forEach(div => {
            if (div.id !== targetDivId) {
                // If the show param is not all, hide all other contents. Meow!
                if (pageSub == "pages/about/snowy/info")
                {
                    if (targetDivId != "all")
                    {
                        div.style.display = "none"; // Show the needed infos
                    }
                } else if (pageSub == "pages/about/snowy/relationship") {
                    if (id == "invalid") // If the param is invalid, we hide all other content
                    {
                        document.getElementById("invalid").style.display = "block"; // Show the matching div
                    } else {
                        div.style.display = "none"; // Hide non-matching divs
                    }
                }
            } else {
                div.style.display = "block"; // Show the needed infos
            }
        });
    }
}

const currentURL = window.location.pathname;
const fileName = currentURL.substring(currentURL.lastIndexOf('/') + 1).replace(".html", "").toLowerCase();
const fileNameSubFolders = currentURL.replace(".html", "").toLowerCase().replace("/pages", "pages");

let param = null;
let paramOut = null;

// ¯\_(ツ)_/¯
// stoopid way to do params, but I did what I could do. It works doe, so it doesn't matter
// ¯\_(ツ)_/¯
if (fileNameSubFolders == "pages/about/snowy/relationship")
{
    param = getParam("snowship");
    paramOut = `?showship=${param}`;
} else if (fileNameSubFolders == "pages/about/snowy/info") {
    param = getParam("show");
    paramOut = `?show=${param}`;
} else if (fileNameSubFolders == "pages/about/snowy/lore") {
    param = getParam("showloresec")
    paramOut = `?showloresec=${param}`;
}

console.log(`\n[Query Paramters] Paramter is '${paramOut}'\n`);

if (fileName && params[fileName][param])
{
    console.log(`\n[Query Paramters] Paramater is correct.\n`);

    doSomeShit(fileName, fileNameSubFolders, param);
} else {
    if (fileNameSubFolders == "pages/about/snowy/relationship")
    {
        doSomeShit(fileName, fileNameSubFolders, "invalid");
    } else if (fileNameSubFolders == "pages/about/snowy/info") {
        console.warn(`Invalid paramter of '${param}'.\n\n`)
        console.log("Valid Paramters:\naccounts\nforfren_forfun\nsome_infos\nnicknames\naddit_info\ngoals\ncompgoals\ncompgoalsnonplanned\nmisc\nlistentomusic\nshitmade\nwhatisfurry\n")
    } else if (fileNameSubFolders == "pages/about/snowy/lore") {
        console.log("\n[Lore Paramters] showing all content\n");
    }
}


// Check if the relation parameter exists and display content
// if (fileName.toLowerCase in validParams) {
//     // contentDiv.innerHTML = contentMap[relation];
//     console.log("yaya")
// } else {
//     // contentDiv.innerHTML = "Invalid or missing parameter. Please try a valid one!";
//     alert("Invalid or missing parameter. Please try a valid one!");
// }