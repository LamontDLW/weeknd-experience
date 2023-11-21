import { xshelldata } from "../data/xshell.js";

let xshellFill = '';
let result = [];
for (let item of xshelldata) { if (item.id === localStorage.getItem("eraID")) { result.push(item); }}

result.forEach((xp) => {

  let mv = '';
  xp.cell3.forEach((element) => {
    mv += `
    <div class="video-cell">
      <h1 class="v-${xp.id}-title v-inline-title">${element.name}</h1>
      <video width="100%" height="100%" preload="metadata" controls muted>
        <source src="assets/e-${xp.id}/videos/${element.src}#t=${element.thumb}" type=video/mp4>
      </video>
    </div>
    `
  })


  let lp = '';
  xp.cell4.forEach((element) => {
    lp += `
    <div class="video-cell">
      <h1 class="v-${xp.id}-title v-inline-title">${element.name}</h1>
      <video width="100%" height="100%" controls muted>
        <source src="assets/e-${xp.id}/videos/${element.src}" type=video/mp4>
      </video>
    </div>
    `
  })


  let jtaFilledImages = '';
  xp.cell2.forEach((n) => { jtaFilledImages += `<img class="filled-image" src="assets/e-${xp.id}/${n}.png">` });

  xshellFill += ` 
    <div class="hero-intro">
      <div class="header-video"><video autoplay muted loop> <source src="assets/e-${xp.id}/videos/${xp.id}-header-video.mp4" type="video/mp4" /></video></div>
        <div class="intro-interactive-tab">
          <img class="album-cover" src="assets/e-${xp.id}/${xp.id}-cover.jpeg" />
          <h1 class="e-${xp.id}-hero-header-name">${xp.xpName}</h1>
          <button><a href="#cell1">the rollout journey</a></button>
          <button><a href="#cell3">experience the videos</a></button>
          <button><a href="#cell4">the LIVE experience</a></button>
        </div>
    </div>
  
    <div class="journeytoalbum">
      <!-- cell 1-->
      <div id="cell1" class="cell1 overlapping-cell">
        <img class="filled-image" src="assets/e-${xp.id}/${xp.cell1.image}.png">
        <div class="cell1-info overlapping-cell-text">
          <h5>${xp.cell1.caption.date}</h5>
          <h3>${xp.cell1.caption.text}</h3>
        </div>
      </div>

      <!-- cell 2-->
      <div class="cell2" id="cell2">
      ${jtaFilledImages}
      </div>

      <div class="cell3" id="cell3">
      <h1 class="xp-${xp.id}-header xp-title-header">The <span class="cinematic-${xp.id}-xp-text">Cinematic Video</span> experience</h1>
      ${mv}
      </div>

      <div class="cell4" id="cell4">
      <h1 class="xp-${xp.id}-header xp-title-header">The <span class="live-${xp.id}-xp-live">LIVE</span> experience</h1>
      ${lp}
      </div>

      <div class="theending">
      <p>this era ended ${xp.ending}</p>
      </div>

    </div>
  `
});
document.querySelector('.xpadddata').innerHTML = xshellFill;