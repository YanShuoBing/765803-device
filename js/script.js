var servicesButton 

var overlay = document.querySelector(".overlay");

var map = document.querySelector(".location");
var mapOpen = document.querySelector(".contacts__link");
var mapClose = map.querySelector(".popup__close");

var feedback = document.querySelector(".write-us");
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
catch (err) {
    isStorageSupport = false;
}

mapOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.add("overlay--show");
    map.classList.add("popup--show");
});
mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.remove("overlay--show");
    map.classList.remove("popup--show");
    map.classList.remove("popup--error");
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (map.classList.contains("popup--show")) {
            evt.preventDefault();
            overlay.classList.remove("overlay--show");
            map.classList.remove("popup--show");
            map.classList.remove("popup--error");
        }
    }
});

feedbackOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.add("overlay--show");
    feedback.classList.add("popup--show");
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
        feedback.classList.remove("popup--error");
        feedback.offsetWidth = feedback.offsetWidth;
        feedback.classList.add("popup--error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", feedbackFullName.value);
            localStorage.setItem("email", feedbackEmail.value);
        }
    };
});
feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.remove("overlay--show");
    feedback.classList.remove("popup--show");
    feedback.classList.remove("popup--error");
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (feedback.classList.contains("popup--show")) {
            evt.preventDefault();
            overlay.classList.remove("overlay--show");
            feedback.classList.remove("popup--show");
            feedback.classList.remove("popup-error");
        }
    }
});

overlay.addEventListener("click", function (evt) {
    overlay.classList.remove("overlay--show");
    map.classList.remove("popup--show");
    mar.classList.remove("popup--error");
    feedback.classList.remove("popup--show");
    feedback.classList.remove("popup--error");
});