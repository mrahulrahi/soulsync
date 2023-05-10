import myJson from "../json/categories.json" assert { type: "json" };
let beverages = myJson.categories.beverages;
let snacks = myJson.categories.snacks;
let desserts = myJson.categories.desserts;

$(function () {
  // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse("hide");
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

(function (global) {
  var dc = {};
  var homeHtml = "snippets/home-snippet.html";

  // Convenience function for inserting innerHTML for 'select'
  var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  // Show loading icon inside element identified by 'selector'.
  var showLoading = function (selector) {
    var html = "<div class='text-center'>";
    html +=
      "<img class='loading-img blend' src='images/ajax-loader.gif'></div>";
    insertHtml(selector, html);
  };

  // Remove the class 'active' from home and switch to Menu button
  var switchMenuToActive = function () {
    // Remove 'active' from home button
    var classes = document.querySelector("#navHomeButton").className;
    classes = classes.replace(new RegExp("active", "g"), "");
    document.querySelector("#navHomeButton").className = classes;

    // Add 'active' to menu button if not already there
    classes = document.querySelector("#navMenuButton").className;
    if (classes.indexOf("active") == -1) {
      classes += " active";
      document.querySelector("#navMenuButton").className = classes;
    }
  };

  // On page load (before images or CSS)
  document.addEventListener("DOMContentLoaded", function (event) {
    // On first load, show home view
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      homeHtml,
      function (responseText) {
        document.querySelector("#main-content").innerHTML = responseText;
      },
      false
    );
  });

  // Load the menu categories view
  dc.loadMenuBeverages = function () {
    showLoading("#main-content");
    document.querySelector(
      "#main-content"
    ).innerHTML = `<h2 id="menu-categories-title" class="text-center">Beverages Menu</h2>`;

    let htmlCode = ``;

    beverages.forEach((element) => {
      htmlCode =
        htmlCode +
        `<div class="menu-card">  
          <div class="menu-item-photo">
            <div>${element.short_name}</div>
            <img class="img-responsive" src="https://placehold.co/600x400/EEE/31343C"
              alt="Item" />
          </div>
          <div class="menu-item-description">
            ${element.price_small}
            <span>${element.small_portion_name}</span>
            ${element.price_large} 
            <span>${element.large_portion_name} </span>
            <h3 class="menu-item-title">${element.name}</h3>
          </div>
          <hr class="visible-xs" />
        </div>`;
    });
    const beveragesCards = document.querySelector("#cards");
    beveragesCards.innerHTML = htmlCode;
  };

  dc.loadMenuSnacks = function () {
    showLoading("#main-content");
    document.querySelector(
      "#main-content"
    ).innerHTML = `<h2 id="menu-categories-title" class="text-center">Snacks Menu</h2>`;

    let htmlCode = ``;

    snacks.forEach((element) => {
      htmlCode =
        htmlCode +
        `<div class="menu-card">  
          <div class="menu-item-photo">
            <div>${element.short_name}</div>
            <img class="img-responsive" src="https://placehold.co/600x400/EEE/31343C"
              alt="Item" />
          </div>
          <div class="menu-item-description">
            ${element.price_small}
            <span>${element.small_portion_name}</span>
            ${element.price_large} 
            <span>${element.large_portion_name} </span>
            <h3 class="menu-item-title">${element.name}</h3>
          </div>
          <hr class="visible-xs" />
        </div>`;
    });
    const snacksCards = document.querySelector("#cards");
    snacksCards.innerHTML = htmlCode;
  };

  dc.loadMenuDesserts = function () {
    showLoading("#main-content");

    document.querySelector(
      "#main-content"
    ).innerHTML = `<h2 id="menu-categories-title" class="text-center">Desserts Menu</h2>`;

    let htmlCode = ``;

    desserts.forEach((element) => {
      htmlCode =
        htmlCode +
        `<div class="menu-card">  
          <div class="menu-item-photo">
            <div>${element.short_name}</div>
            <img class="img-responsive" src="https://placehold.co/600x400/EEE/31343C"
              alt="Item" />
          </div>
          <div class="menu-item-description">
            ${element.price_small}
            <span>${element.small_portion_name}</span>
            ${element.price_large} 
            <span>${element.large_portion_name} </span>
            <h3 class="menu-item-title">${element.name}</h3>
          </div>
          <hr class="visible-xs" />
        </div>`;
    });
    const dessertsCards = document.querySelector("#cards");
    dessertsCards.innerHTML = htmlCode;
  };

  global.$dc = dc;
})(window);
