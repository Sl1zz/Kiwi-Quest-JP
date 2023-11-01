
/* menu for small screen*/
function openmenu() {
  var navLinks = document.getElementById("navlinks");
  navLinks.style.right = "0";
}

function hidemenu() {
  var navLinks = document.getElementById("navlinks");
  navLinks.style.right = "-200px";
}

/*tab for checklist*/
function showTab(tabName) {
  var tabs = document.querySelectorAll('.tab-content');
  var tabButtons = document.querySelectorAll('.tab-button');

  tabs.forEach(function (tab) {
    tab.style.display = 'none';
  });

  tabButtons.forEach(function (button) {
    button.classList.remove('active');
  });

  document.getElementById(tabName).style.display = 'block';
  event.currentTarget.classList.add('active');
}

/*clock */
function updateClocks() {
  const clocks = document.querySelectorAll(".clock");

  clocks.forEach(clock => {
    const timezone = clock.getAttribute("data-timezone");
    const now = new Date();
    const options = {
      timeZone: timezone,
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    const timeString = now.toLocaleTimeString(undefined, options);
    clock.textContent = timeString;
  });
}

setInterval(updateClocks, 1000);
updateClocks();

/*function to toggle the guide content for small screens*/
function toggleGuideContent() {
  const guideContent = document.querySelector('.guidecontent');
  guideContent.classList.toggle('active');
}

/*Read more buttons*/
function readmore(section) {
  var dots = document.getElementsByClassName("dots")[section - 1];
  var moreText = document.getElementsByClassName("more")[section - 1];
  var btnText = document.getElementById("myBtn" + section);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

/*contact form toggle*/
function toggleForm() {
  var contactForm = document.getElementById("contactForm");
  var btnText = document.getElementById("myBtn9");

  if (contactForm.style.display === "none") {
    contactForm.style.display = "block";
    btnText.innerHTML = "Read less";
  } else {
    contactForm.style.display = "none";
    btnText.innerHTML = "Read more";
  }
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {


  /*auto fill function for countrys*/
  function autocomplete(inp, arr) {

    var currentFocus;

    inp.addEventListener("input", function (e) {
      var a, b, i, val = this.value;

      closeAllLists();
      if (!val) { return false; }
      currentFocus = -1;

      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");

      this.parentNode.appendChild(a);

      for (i = 0; i < arr.length; i++) {

        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

          b = document.createElement("DIV");

          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);

          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

          b.addEventListener("click", function (e) {

            inp.value = this.getElementsByTagName("input")[0].value;

            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });

    inp.addEventListener("keydown", function (e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {

        currentFocus++;

        addActive(x);
      } else if (e.keyCode == 38) { //up

        currentFocus--;

        addActive(x);
      } else if (e.keyCode == 13) {

        e.preventDefault();
        if (currentFocus > -1) {

          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {

      if (!x) return false;

      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);

      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {

      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {

      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }

    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
    });
  }

  /*An array containing all the country names in the world:*/
  var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

  autocomplete(document.getElementById("myInput"), countries);
});

/* imageboard modal*/
document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("myModal");
  var images = document.querySelectorAll(".image-gallery img");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var closeButton = document.getElementById("closeButton");
  var prevButton = document.getElementById("prevButton");
  var nextButton = document.getElementById("nextButton");
  var currentIndex = 0;

  images.forEach(function(img, index) {
    img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
      currentIndex = index;
    }
  });

  closeButton.onclick = function() {
    modal.style.display = "none";
  }

  // Add event listeners for "prev" and "next" buttons
  prevButton.onclick = function() {
    plusSlides(-1);
  }

  nextButton.onclick = function() {
    plusSlides(1);
  }

  function plusSlides(n) {
    currentIndex += n;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
  }
});
