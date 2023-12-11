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
      <video width="100%" height="100%" preload="metadata"  controls muted>
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
      <video width="100%" height="100%"  controls muted>
        <source src="assets/e-${xp.id}/videos/${element.src}#t=${element.thumb}" type=video/mp4>
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
          <h1 class="header-xp-name">${xp.xpName}</h1>
          <div class="intro-interactive-info">
            <img class="album-cover-hero" src="assets/e-${xp.id}/${xp.id}-cover.jpeg">
            <div class="hero-intro-xpnav">
              <ul>
                <li>rollout journey</li>
                <li>music videos</li>
                <li>live videos</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  

      <div class="journey-xp">
        <h1>mini album rollout journey</h1>
        <div class="timeline timeline-1 ">
          <img class="filled-image" src="assets/e-${xp.id}/${xp.cell1.timeline.timeline1.image}.png">
          <h6>${xp.cell1.timeline.timeline1.date}</h6>
          <h3>${xp.cell1.timeline.timeline1.caption}</h3>
        </div>

        <div class="v-line-timeline"></div>

        <div class="timeline timeline-2">
        <img class="filled-image" src="assets/e-${xp.id}/${xp.cell1.timeline.timeline2.image}.png">
        <h6>${xp.cell1.timeline.timeline2.date}</h6>
        <h3>${xp.cell1.timeline.timeline2.caption}</h3>
        </div>

        <div class="v-line-timeline"></div>

        <div class="timeline timeline-3">
        <img class="filled-image" src="assets/e-${xp.id}/${xp.cell1.timeline.timeline3.image}.png">
        <h6>${xp.cell1.timeline.timeline3.date}</h6>
        <h3>${xp.cell1.timeline.timeline3.caption}</h3>
        </div>
      </div>

      <!-- cell 2
      <div class="cell2" id="cell2">
      ${jtaFilledImages}
      </div>
      -->

      <div class="cell3" id="cell3">
      <h1 class="xp-${xp.id}-header xp-title-header">The <span class="cinematic-${xp.id}-xp-text">Cinematic Video</span> experience</h1>
      <div class="video-row">${mv}</div>
      </div>

      <div class="cell4" id="cell4">
      <h1 class="xp-${xp.id}-header xp-title-header">The <span class="live-${xp.id}-xp-live">LIVE</span> experience</h1>
      <div class="video-row">${lp}</div>
      </div>

      <div class="rapidfacts">
      <p>${xp.facts.release}</p>
      <p>${xp.facts.streams}</p>
      <p>${xp.facts.runtime}</p>
      </div>

      <div class="theending">
      <p>this era ended ${xp.ending}</p>
      </div>

    </div>
  `
});
document.querySelector('.xpadddata').innerHTML = xshellFill;