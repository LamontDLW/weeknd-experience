import { achievements, albums } from "../data/albums-info.js";

let albumCards = '';
albums.forEach((album) => {

  let tracks = '';
  let trackList = album.tracklist;
  trackList.forEach((n, i) => { tracks += `<li><span class="track-list-number">track ${i+1}</span>${n}</li>` });

  albumCards += `
  <div class="album-card album-card-${album.id}" id="album-card-${album.id}">
    <h1 class="release-date">${album.release}</h1>
    <h4 class="album-name">${album.name}</h4>
    <img class="album-cover" src="${album.cover}" />
    <ul class="track-list"> ${tracks}</ul>

    <div class="thevisuals-logo">
      <h1><a href="experiences/e${album.id}.html"><span class="thevisuals-logo-colors">experience</span> <span class="thevisuals-logo-greyscale">The Visuals</span></a></h1>
    </div>
  </div>
  `;
});
document.querySelector('.the-eras').innerHTML = albumCards;

// set album covers + links for jump to container
let albumCovers = ''
albums.forEach((c) => {
  albumCovers += ` <div><a href="#album-card-${c.id}"><img src="${c.cover}"></a></div>`
})
document.querySelector('.cover-wrapper').innerHTML = albumCovers;


// change background color to match album color
albums.forEach((albumID) => {
  var observer = new IntersectionObserver(function(entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    if(entries[0].isIntersecting === true) {
      console.log(`${albumID.id} is visible on screen`);
      document.body.style.backgroundColor = `#${albumID.color}`
    }
  }, { threshold: [0.15] });
  observer.observe(document.querySelector(`.album-card-${albumID.id}`));
})

// the weeknd achievements list
let achievementslist = ''; 
let achievementsList = achievements;
achievementsList.forEach((n, i) => { achievementslist += `<li class="achieve-${i}">${n}</li>`});
document.querySelector('.achievement-list').innerHTML = achievementslist;
document.querySelector(`.achieve-${achievementsList.length - 1}`).style.color = "#102E5E"
