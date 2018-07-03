var servicesButton 

var map = document.querySelector(".overlay--location");
var mapOpen = document.querySelector(".contacts__link");
var mapClose = map.querySelector(".popup__close");

var feedback = document.querySelector(".overlay--write-us");
var feedbackOpen = document.querySelector(".contacts__button");
var feedbackForm = feedback.querySelector(".write-us__form");
var feedbackFullName = feedback.querySelector(".write-us__full-name");
var feedbackEmail = feedback.querySelector(".write-us__email");
var feedbackMessage = feedback.querySelector(".write-us__textarea");
var feedbackClose = feedback.querySelector(".popup__close");

var isStorageSupport = true;
var storageFullName = "";
var storageEmail = "";

try {
    storageFullName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
}
catch {
    isStorageSupport = false;
}

map.addEventListener("click", function (evt) {
    map.classList.remove("overlay--show");
});
mapOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("overlay--show");
});
mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("overlay--show");
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (map.classList.contains("overlay--show")) {
            evt.preventDefault();
            map.classList.remove("overlay--show");
        }
    }
});

feedback.addEventListener("click", function (evt) {
    feedback.classList.remove("overlay--show");
});
feedbackOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("overlay--show");
    feedbackFullName.focus();
    if (storageFullName) {
        feedbackFullName.value = storageFullName;
        if (storageEmail) {
            feedbackEmail.value = storageEmail;
            feedbackMessage.focus();
        }
        else {
            feedbackEmail.focus();
        }
    }
});
feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackFullName.value || !feedbackEmail.value || !feedbackMessage.value) {
        evt.preventDefault();
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", feedbackFullName.value);
            localStorage.setItem("email", feedbackEmail.value);
        }
    };
});
feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.remove("overlay--show");
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (feedback.classList.contains("overlay--show")) {
            evt.preventDefault();
            feedback.classList.remove("overlay--show");
        }
    }
});