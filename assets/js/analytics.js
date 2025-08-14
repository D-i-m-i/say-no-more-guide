// USE A TIMEOUT IN CASE LINKS DON'T OPEN IN NEW TABS TO ENSURE EVENT IS SENT BEFORE THE BROWSER NAGIVATES AWAY

// document.getElementById("download-btn").addEventListener("click", function (e) {
//   e.preventDefault(); // stop immediate navigation
//   gtag("event", "button_click", { button_name: "download-btn" });
//   setTimeout(() => {
//     window.location.href = e.target.href;
//   }, 200); // small delay so event sends
// });

document.getElementById("download-btn").addEventListener("click", function () {
  gtag("event", "button_click", {
    button_name: "download-btn",
  });
});

document.getElementById("donate-btn").addEventListener("click", function () {
  gtag("event", "button_click", {
    button_name: "donate-btn",
  });
});

document.getElementById("fb-btn").addEventListener("click", function () {
  gtag("event", "button_click", {
    button_name: "fb-btn",
  });
});

document.getElementById("ig-btn").addEventListener("click", function () {
  gtag("event", "button_click", {
    button_name: "ig-btn",
  });
});

document.getElementById("linkedin-btn").addEventListener("click", function () {
  gtag("event", "button_click", {
    button_name: "linkedin-btn",
  });
});
