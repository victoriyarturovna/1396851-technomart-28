var buyLinks=document.querySelectorAll(".buy"),basketPopup=document.querySelector(".basket"),basketClose=basketPopup.querySelector(".button-close"),basketContinuebuy=basketPopup.querySelector(".continue");for(buyLink of buyLinks)buyLink.addEventListener("click",function(e){e.preventDefault(),basketPopup.classList.add("modal-show")});basketClose.addEventListener("click",function(e){e.preventDefault(),basketPopup.classList.remove("modal-show")}),basketContinuebuy.addEventListener("click",function(e){e.preventDefault(),basketPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&basketPopup.classList.contains("modal-show")&&(e.preventDefault(),basketPopup.classList.remove("modal-show"))});