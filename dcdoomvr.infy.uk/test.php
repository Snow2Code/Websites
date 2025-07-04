<?php
/*==========================================================================*

  File:        snow2code.css                     Created: 17/06/2025
  Purpose:     The website's scheming

  Project:     DCDoomVR personal site
  Author:      Snowy  –  snow2code@protonmail.com
  Copyright:   © 2025 DCDoomVR. All rights reserved.
               This is personal hobby code. No warranty, no promises.
               Please don’t nick it without asking.

  Color‑blind note: no red‑green reliance anywhere. Verified for deuteranopia.

 *==========================================================================*/




$url = "https://raw.githubusercontent.com/Snow2Code/dcdoomvr.infy.uk/refs/heads/main/system-message/active";

// Fetch the file content
$fileContent = file_get_contents($url);

if ($fileContent === false) {
    echo "Failed to fetch the file.";
} else {
    // echo "File content:";
    if ($fileContent === "true\n") {
        echo "true";
    } else {
        echo "bad value";
    }


}
?>