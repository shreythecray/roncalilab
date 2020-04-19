//SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




function switchTab(num, type) {
    const [buttons] = document.getElementsByClassName("tab-buttons--" + type);
    const [tabContents] = document.getElementsByClassName("tab-content--" + type);

    for (let i = 0; i < buttons.children.length; i++) {
      if (i === num) {
        buttons.children[i].className = "tab-button tab-button--active";
        tabContents.children[i].className = "tab-content tab-content--active";
      } else {
        buttons.children[i].className = "tab-button";
        tabContents.children[i].className = "tab-content";
      }
    }
  }

// MENU SCROLL FUNCTION
  function checkSticky() {
    const [navbar] = document.getElementsByTagName("nav");

    if (window.pageYOffset > 0) {
      navbar.classList.add("nav--fixed")
    } else {
      navbar.classList.remove("nav--fixed");
    }
  }
  // When the user scrolls the page, execute myFunction
  window.onscroll = checkSticky;
