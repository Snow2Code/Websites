// Define the menu items
const snowmenuItems = [
    { name: "Home", url: "/pages/about/snowy/index.html" },
    { name: "Info", url: "/pages/about/snowy/info.html?show=all" },
    { name: "Relationships", url: "/pages/about/snowy/relationships.html" },
    { name: "My Playlist", url: "https://drive.google.com/drive/folders/11bAlOS_Vj__dashdD2hVp2pKe3r83ZcK?usp=drive_link" },
    { name: "Snowy's Lore", url: "/pages/about/snowy/lore.html" },
    { name: "My persona/main oc/mascot", url: "/pages/about/snowy/oc.html" },
];

function generateNavItems(navId) {
    const navUl = document.getElementById(navId);

    snowmenuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.url;
        a.textContent = item.name;
        li.appendChild(a);
        navUl.appendChild(li);
    });
}

generateNavItems('subheader-nav');
generateNavItems('subfooter-nav');

const snownavLinks = document.querySelectorAll('subheader nav ul li a, footer nav ul li a');

snownavLinks.forEach(link => {
    let colorInterval;

    link.addEventListener('mouseenter', () => {
        let colorIndex = 0;
        const snowcolors = [
            'rgba(0, 255, 149)',  // Mint
            'rgba(132, 0, 255)'  // Purple
        ];

        colorInterval = setInterval(() => {
            link.style.boxShadow = `0 0 15px 5px ${snowcolors[colorIndex]}, 0 0 15px 5px ${colors[1 - colorIndex]}`;
            colorIndex = 1 - colorIndex; // Toggle between 0 and 1
        }, 1000); // Change color every second
    });

    link.addEventListener('mouseleave', () => {
        clearInterval(colorInterval);
        link.style.boxShadow = 'none'; // Remove the glow when the cursor leaves
    });
});
