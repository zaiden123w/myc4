var cloakElement;

document.addEventListener("DOMContentLoaded", function () {
  cloakElement = document.getElementById("premadecloaks");
  var cloak = cloakElement.value;
});

var tab = localStorage.getItem("tab");
if (tab) {
  try {
    var tabData = JSON.parse(tab);
  } catch {
    var tabData = {};
  }
} else {
  var tabData = {};
}

var titleElement = document.getElementById("title");
var iconElement = document.getElementById("icon");

if (tabData.title && titleElement) titleElement.value = tabData.title;
if (tabData.icon && iconElement) iconElement.value = tabData.icon;

var settingsDefaultTab = {
  title: "Dashboard",
  icon: "/img/canvas.ico",
};

function setTitle(title = "") {
  if (title) {
    document.title = title;
  } else {
    document.title = settingsDefaultTab.title;
  }

  var tab = localStorage.getItem("tab");

  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }

  if (title) {
    tabData.title = title;
  } else {
    delete tabData.title;
  }

  localStorage.setItem("tab", JSON.stringify(tabData));
}

function setFavicon(icon) {
  if (icon) {
    document.querySelector("link[rel='icon']").href = icon;
  } else {
    document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  }

  var tab = localStorage.getItem("tab");

  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }

  if (icon) {
    tabData.icon = icon;
  } else {
    delete tabData.icon;
  }

  localStorage.setItem("tab", JSON.stringify(tabData));
}

function setCloak() {
  var cloak = cloakElement.value;

  switch (cloak) {
    case "search":
      setTitle("Google");
      setFavicon("/assets/cloaks/Google Search.ico");
      break;
    case "wikipedia":
      setTitle("Wikipedia, the free encyclopedia");
      setFavicon("/assets/cloaks/Wikipedia.ico");
      break;
    case "bsite":
      setTitle("Billibilli");
      setFavicon("/assets/cloaks/Billibilli.ico");
      break;
    case "drive":
      setTitle("My Drive - Google Drive");
      setFavicon("/assets/cloaks/Google Drive.ico");
      break;
    case "gmail":
      setTitle("Gmail");
      setFavicon("/assets/cloaks/Gmail.ico");
      break;
    case "calendar":
      setTitle("Google Calendar");
      setFavicon("/assets/cloaks/Calendar.ico");
      break;
    case "meets":
      setTitle("Google Meet");
      setFavicon("/assets/cloaks/Meet.ico");
      break;
    case "classroom":
      setTitle("Classes");
      setFavicon("/assets/cloaks/Classroom.png");
      break;
    case "canvas":
      setTitle("Dashboard");
      setFavicon("/assets/cloaks/Canvas.ico");
      break;
    case "zoom":
      setTitle("Zoom");
      setFavicon("/assets/cloaks/Zoom.ico");
      break;
    case "khan":
      setTitle("Dashboard | Khan Academy");
      setFavicon("/assets/cloaks/Khan Academy.ico");
      break;
    case "itchio":
      setTitle("Download the latest indie games - itch.io");
      setFavicon("/assets/cloaks/itchio.ico");
      break;
    case "deltamath":
      setTitle("DeltaMath Student Application");
      setFavicon("/assets/cloaks/deltamath.png");
      break;
    case "ed":
      setTitle("Edpuzzle");
      setFavicon("/assets/cloaks/edpuzzle.png");
      break;
  }
}
function resetTab() {
  document.title = "Dashboard";
  document.querySelector("link[rel='icon']").href = "/img/canvas.ico";
  document.getElementById("title").value = "";
  document.getElementById("icon").value = "";
  localStorage.setItem("tab", JSON.stringify({}));
}

var panicKey = localStorage.getItem("panicKey") || "`";
var panicLink =
  localStorage.getItem("PanicLink") || "https://canvas.houstonisd.org/";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("key").value = panicKey;
  document.getElementById("link").value = panicLink;
});

function setPanicKey() {
  var key = document.getElementById("key").value;
  localStorage.setItem("panicKey", key);
}

function setPanicLink() {
  var link = document.getElementById("link").value;
  localStorage.setItem("PanicLink", link);
}

function cloak() {
  let inFrame;

  try {
    inFrame = window !== top;
  } catch (e) {
    inFrame = true;
  }

  if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank");
    if (!popup || popup.closed) {
      alert("Please allow popups and redirects.");
    } else {
      const doc = popup.document;
      const iframe = doc.createElement("iframe");
      const style = iframe.style;
      const link = doc.createElement("link");

      const name = tabData.title || "Dashboard";
      const icon = tabData.icon || "/img/canvas.ico";

      doc.title = name;
      link.rel = "icon";
      link.href = icon;

      iframe.src = location.href;
      style.position = "fixed";
      style.top = style.bottom = style.left = style.right = 0;
      style.border = style.outline = "none";
      style.width = style.height = "100%";

      doc.head.appendChild(link);
      doc.body.appendChild(iframe);

      const pLink =
        localStorage.getItem(encodeURI("pLink")) ||
        "https://canvas.houstonisd.org/";
      location.replace(pLink);

      const script = doc.createElement("script");
      script.textContent = `
        window.onbeforeunload = function (event) {
          const confirmationMessage = 'Leave Site?';
          (event || window.event).returnValue = confirmationMessage;
          return confirmationMessage;
        };
      `;
      doc.head.appendChild(script);
    }
  }
}

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function convertDate(date_str) {
  temp_date = date_str.split("-");
  return (
    temp_date[2] + " " + months[Number(temp_date[1]) - 1] + " " + temp_date[0]
  );
}
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function convertDate(date_str) {
  temp_date = date_str.split("-");
  return (
    months[Number(temp_date[1]) - 1] + " " + temp_date[2] + ", " + temp_date[0]
  );
}

fetch("https://api.github.com/repos/55gms/55gms/commits")
  .then((response) => response.json())
  .then((data) => {
    var unformatted = new Date(data[0].commit.author.date)
      .toISOString()
      .split("T")[0];
    var lastCommitDate = convertDate(unformatted);
    document.querySelector("#updated").textContent =
      `Last Updated: ${lastCommitDate}`;
  });
