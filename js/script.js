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

var slidesForward = document.querySelectorAll(".button-forward");
var slidesBack = document.querySelectorAll(".button-back");
var slides = document.querySelectorAll(".slider");


var isStorageSupport = true;
var storage = "";
var currentSlide = 0;


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


for (slideForward of slidesForward) {
  slideForward.addEventListener("click", function (evt){
  evt.preventDefault();
  currentSlide = currentSlide + 1;
  slides[currentSlide].classList.add("slider-active");
  slides[currentSlide-1].classList.remove("slider-active");
  currentSlide = 0;
})
};

for (slideBack of slidesBack) {
slideBack.addEventListener("click", function (evt){
  evt.preventDefault();
  currentSlide = 0;
  slides[currentSlide].classList.add("slider-active");
  slides[currentSlide+1].classList.remove("slider-active");
})
};





