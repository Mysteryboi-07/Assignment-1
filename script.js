const packs = [
    {
      title: "<u>Starter Pack</u>",
      description: `2nd Gen Full-Dive Headset<br><br>
                    Discord Rank Newbie<br><br>
                    Access to Game 1 Day Before Full Release`,
    },
    {
      title: "<u>Advanced Pack</u>",
      description: `All Previous Benefits (Excluding Headsets)<br><br>
                    3rd Gen Full-Dive Headset<br><br>
                    Discord Rank Swordsman<br><br>
                    Access to Game 3 Days Before Full Release<br><br>
                    Code for x1.2 Experience Points Boost<br><br>
                    Ability to Make Suggestions to the Developers`,
    },
    {
      title: "<u>Collector's Pack</u>",
      description: `All Previous Benefits (Excluding Headsets)<br><br>
                    Artisan's 3rd Gen Full-Dive Headset<br><br>
                    Discord Rank Demon Lord (Or choose your own custom rank!)<br><br>
                    Access to Game 5 Days Before Full Release<br><br>
                    Personal Code for All Floor Maps (Linked to Account)<br><br>
                    Our Eternal Gratitude`,
    },
  ];
  
  function getPackFromURL() {
    const params = new URLSearchParams(window.location.search);
    const packName = params.get("pack");
    const packIndex = packs.findIndex(
      (pack) => pack.title.toLowerCase().includes(packName?.toLowerCase() || "")
    );
    return packIndex >= 0 ? packIndex : 0;
  }
  
  let currentPack = getPackFromURL();
  
  function updatePack() {
    document.getElementById("pack-title").innerHTML = packs[currentPack].title;
    document.getElementById("pack-description").innerHTML =
      packs[currentPack].description;
  }
  
  document.getElementById("prev-btn").addEventListener("click", () => {
    currentPack = (currentPack - 1 + packs.length) % packs.length;
    updatePack();
  });
  
  document.getElementById("next-btn").addEventListener("click", () => {
    currentPack = (currentPack + 1) % packs.length;
    updatePack();
  });
  
  updatePack();

