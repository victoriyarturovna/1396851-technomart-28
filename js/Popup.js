var writeLink = document.querySelector(".write-button");
var writePopup = document.querySelector(".write-us");
var writeForm = writePopup.querySelector(".write-us-form");
var writeClose = writePopup.querySelector(".button-close");
var writeLogin = writePopup.querySelector(".area-for-information-name");
var writeEmail = writePopup.querySelector(".area-for-information-email");
var writeComment = writePopup.querySelector(".area-for-information-comment");

var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".button-close-map");

var sliderForward = document.querySelector(".button-forward");
var sliderBack = document.querySelector(".button-back");
var sliders = document.querySelectorAll(".slider");


var isStorageSupport = true;
var storage = "";
var i = 0;


try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}


writeLink.addEventListener("click", function (evt) {
	evt.preventDefault ();
	writePopup.classList.add("modal-show");
	writeLogin.focus();

if (storage) {
    writeLogin.value = storage;
    writeEmail.focus();
  } else {
    writeLogin.focus();
  }

});

writeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.remove("modal-show");
  writePopup.classList.remove("modal-error");
});

writeForm.addEventListener("submit", function (evt) {
	if (!writeLogin.value || !writeEmail.value) {
    evt.preventDefault();
    writePopup.classList.remove("modal-error");
    writePopup.offsetWidth = writePopup.offsetWidth;
    writePopup.classList.add("modal-error");
   } else {
   		if (isStorageSupport) {
    localStorage.setItem("username", writeLogin.value);
	}	
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writePopup.classList.remove("modal-show");
      writePopup.classList.remove("modal-error");
    }
  }
});



mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});



sliderForward.addEventListener("click", function(evt) {
  evt.preventDefault();
  ++i; 
  if (i >= sliders.lenght) {
    sliders[i-1].classList.remove("slider-active");
    i = 0;
    sliders[i].classList.add("slider-active");
  } else {
    sliders[i-1].classList.remove("slider-active");
    sliders[i].classList.add("slider-active");
  } 
});

