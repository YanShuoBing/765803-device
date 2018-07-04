var popularControls = document.querySelectorAll(".controls__button");
var popularCurrent = document.querySelector(".controls__button--current");
var popularSlides = document.querySelectorAll(".slider__item");
var popularShow =  document.querySelector(".slider__item--show");

var featuresItem = document.querySelectorAll(".features__item");
var featuresItemCurrent = document.querySelector(".features__item--current");
var featuresControls = document.querySelectorAll(".features__button");
var featuresCurrent = document.querySelector(".features__button--current");
var featuresSlides = document.querySelectorAll(".features__slide");
var featuresShow =  document.querySelector(".features__slide--show");

var overlay = document.querySelector(".overlay");

var map = document.querySelector(".location");
var mapOpen = document.querySelector(".contacts__link");
var mapClose = map.querySelector(".popup__close");
var mapPreview;
var mapFull;
var mapPreviewMarker;
var mapFullMarker;

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

for (var i = 0; i < popularControls.length; i++) {
    popularControls[i].addEventListener("click", function (evt) {
        evt.preventDefault ();
        if (!this.classList.contains("controls__button--current")) {
            popularCurrent.classList.remove("controls__button--current");
            popularCurrent = this;
            this.classList.add("controls__button--current");

            for (var j = 0; j < popularSlides.length; j++) {
                if (popularControls[j].classList.contains("controls__button--current")) {
                    popularShow.classList.remove("slider__item--show");
                    popularSlides[j].classList.add("slider__item--show");
                    popularShow = popularSlides[j];
        }
      }
    }
  })
}

for (var i = 0; i < featuresControls.length; i++) {
    featuresControls[i].addEventListener("click", function (evt) {
        evt.preventDefault ();
        if (!this.classList.contains("features__button--current")) {
            featuresCurrent.classList.remove("features__button--current");
            featuresItemCurrent.classList.remove("features__item--current");
            featuresCurrent = this;
            this.classList.add("features__button--current");

            for (var j = 0; j < featuresSlides.length; j++) {
                if (featuresControls[j].classList.contains("features__button--current")) {
                    featuresShow.classList.remove("features__slide--show");
                    featuresSlides[j].classList.add("features__slide--show");
                    featuresItem[j].classList.add("features__item--current");
                    featuresShow = featuresSlides[j];
        }
      }
    }
  })
}

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

function initMap() {
    mapPreview = new google.maps.Map(document.querySelector(".contacts__link"), {
        center: {lat: 55.687031, lng: 37.52961800000003},
        zoom: 17,
        disableDefaultUI: true
        });
    mapPreviewMarker = new google.maps.Marker({position: {lat: 55.687031, lng: 37.52961800000003}, map: mapPreview});
    mapFull = new google.maps.Map(document.querySelector(".location__map"), {
        center: {lat: 55.687031, lng: 37.52961800000003},
        zoom: 17
        });
    mapFullMarker = new google.maps.Marker({position: {lat: 55.687031, lng: 37.52961800000003}, map: mapFull});
}

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