// GEO OFFER LINKS
const czLink = "https://check-link.click/a/ERKgXupp1LsPQkl";
const globalLink = "https://safeoffers.pro/a/yPp4AI32ZfQ47G";

// ROTATING IMAGES
const images = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
];

let index = 0;
const imgElement = document.getElementById("rotatingImage");

setInterval(() => {
  index = (index + 1) % images.length;
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = images[index];
    imgElement.style.opacity = 1;
  }, 400);
}, 2500);

// GEO DETECTION
async function getVisitorCountry() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    return data.country_code;
  } catch {
    return null;
  }
}

async function redirectUser() {
  const country = await getVisitorCountry();
  const target = country === "CZ" ? czLink : globalLink;
  window.location.href = target;
}

// button click redirect
document.getElementById("joinBtn").onclick = redirectUser;

// auto redirect after 4 seconds
setTimeout(redirectUser, 4000);
