var buyLinks = document.querySelectorAll(".buy");
var basketPopup = document.querySelector(".basket");
var basketClose = basketPopup.querySelector(".button-close");
var basketContinuebuy = basketPopup.querySelector(".continue");



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