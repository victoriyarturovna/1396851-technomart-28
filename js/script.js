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
var slidesControl = document.querySelectorAll(".button-control");

var buyLinks = document.querySelectorAll(".buy");
var basketPopup = document.querySelector(".basket");
var basketClose = basketPopup.querySelector(".button-close");
var basketContinuebuy = basketPopup.querySelector(".continue");

var serviceButtonsDelivery = document.querySelector(".switch-delivery");
var serviceButtonsGuarantee = document.querySelector(".switch-guarantee");
var serviceButtonsCredit = document.querySelector(".switch-credit");
var serviceDelivery = document.querySelector(".text-delivery");
var serviceGuarantee = document.querySelector(".text-guarantee");
var serviceCredit = document.querySelector(".text-credit");

var isStorageSupport = true;
var storage = "";
var currentSlide = 0;
var currentDot = 0;



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
    currentDot = currentDot +1;

    slides[currentSlide].classList.add("slider-active");
    slides[currentSlide-1].classList.remove("slider-active");
    currentSlide = 0;

    slidesControl[currentDot+1].classList.add("button-control-active");
    currentDot = 0;
})
};

for (slideBack of slidesBack) {
  slideBack.addEventListener("click", function (evt){
    evt.preventDefault();
    currentSlide = currentSlide;
    currentDot = currentDot;

    slides[currentSlide].classList.add("slider-active");
    slides[currentSlide+1].classList.remove("slider-active");
    currentSlide = 0;

    slidesControl[currentDot|1].classList.add("button-control-active");
    currentDot = 0;
})
};



serviceButtonsDelivery.addEventListener("click", function (evt) {
  evt.preventDefault ();
  serviceButtonsDelivery.classList.add("switch-on");
  serviceDelivery.classList.add("service-show");
  serviceButtonsGuarantee.classList.remove("switch-on");
  serviceGuarantee.classList.remove("service-show");
  serviceButtonsCredit.classList.remove("switch-on");
  serviceCredit.classList.remove("service-show");
});

serviceButtonsGuarantee.addEventListener("click", function (evt) {
  evt.preventDefault ();
  serviceButtonsGuarantee.classList.add("switch-on");
  serviceGuarantee.classList.add("service-show");
  serviceButtonsDelivery.classList.remove("switch-on");
  serviceDelivery.classList.remove("service-show");
  serviceButtonsCredit.classList.remove("switch-on");
  serviceCredit.classList.remove("service-show");
});

serviceButtonsCredit.addEventListener("click", function (evt) {
  evt.preventDefault ();
  serviceButtonsCredit.classList.add("switch-on");
  serviceCredit.classList.add("service-show");
  serviceButtonsDelivery.classList.remove("switch-on");
  serviceDelivery.classList.remove("service-show");
  serviceButtonsGuarantee.classList.remove("switch-on");
  serviceGuarantee.classList.remove("service-show");
});

for (buyLink of buyLinks) {
    buyLink.addEventListener("click", function (evt) {
    evt.preventDefault ();
    basketPopup.classList.add("modal-show");
  })
};


basketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-show");
});

basketContinuebuy.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (basketPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      basketPopup.classList.remove("modal-show");
    }
  }
});




    



