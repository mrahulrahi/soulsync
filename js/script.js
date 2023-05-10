import myJson from "../json/categories.json" assert { type: "json" };
var beverages = myJson.categories.beverages;
var snacks = myJson.categories.snacks;
var desserts = myJson.categories.desserts;

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
    ).innerHTML = `<h2 id="menu-categories-title" class="text-center"> Beverages Menu</h2>`;

    for (var i = 0; i <= beverages.length; i++) {
      var shortName = beverages[i].short_name;
      var name = beverages[i].name;
      var smallPrice = beverages[i].price_small;
      var smallName = beverages[i].small_portion_name;
      var largePrice = beverages[i].price_large;
      var largeName = beverages[i].large_portion_name;
      var description = beverages[i].description;
      var beverageCard = beverageCard(
        shortName,
        name,
        smallPrice,
        smallName,
        largePrice,
        largeName,
        description
      );

      beverageCard += beverageCard;
      console.log(
        shortName,
        name,
        smallPrice,
        smallName,
        largePrice,
        largeName,
        description
      );
    }

    function beverageCard(
      shortName,
      name,
      smallPrice,
      smallName,
      largePrice,
      largeName,
      description
    ) {
      document.querySelector("#main-content").appendChild =
        `<div class="menu-item-tile col-md-6">
                <div class="row">
                  <div class="col-sm-5">
                    <div class="menu-item-photo">
                      <div>` +
        shortName +
        `</div>
                      <img class="img-responsive" width="250" height="150" src="images/menu/{{catShortName}}/{{short_name}}.jpg"
                        alt="Item" />
                    </div>
                    <div class="menu-item-price">
                      ` +
        smallPrice +
        `<span> ` +
        smallName +
        `</span>` +
        largePrice +
        `
                      <span>` +
        largeName +
        `</span>
                    </div>
                  </div>
                  <div class="menu-item-description col-sm-7">
                    <h3 class="menu-item-title">` +
        name +
        `</h3>
                    <p class="menu-item-details">` +
        description +
        `</p>
                  </div>
                </div>
                <hr class="visible-xs" />
              </div>`;
    }
  };

  dc.loadMenuSnacks = function () {
    showLoading("#main-content");

    document.querySelector(
      "#main-content"
    ).innerHTML = `<h2 id="menu-categories-title" class="text-center"> Snacks Menu</h2>    
        
        <div class="menu-item-tile col-md-6">
          <div class="row">
            <div class="col-sm-5">
              <div class="menu-item-photo">
                <div>{{short_name}}</div>
                <img class="img-responsive" width="250" height="150" src="images/menu/{{catShortName}}/{{short_name}}.jpg"
                  alt="Item" />
              </div>
              <div class="menu-item-price">
                {{price_small}}<span> {{small_portion_name}}</span> {{price_large}}
                <span>{{large_portion_name}}</span>
              </div>
            </div>
            <div class="menu-item-description col-sm-7">
              <h3 class="menu-item-title">{{name}}</h3>
              <p class="menu-item-details">{{description}}</p>
            </div>
          </div>
          <hr class="visible-xs" />
        </div>`;
  };

  dc.loadMenuDesserts = function () {
    showLoading("#main-content");

    document.querySelector(
      "#main-content"
    ).innerHTML = `<h2 id="menu-categories-title" class="text-center"> Desserts Menu</h2>    
        
        <div class="menu-item-tile col-md-6">
          <div class="row">
            <div class="col-sm-5">
              <div class="menu-item-photo">
                <div>{{short_name}}</div>
                <img class="img-responsive" width="250" height="150" src="images/menu/{{catShortName}}/{{short_name}}.jpg"
                  alt="Item" />
              </div>
              <div class="menu-item-price">
                {{price_small}}<span> {{small_portion_name}}</span> {{price_large}}
                <span>{{large_portion_name}}</span>
              </div>
            </div>
            <div class="menu-item-description col-sm-7">
              <h3 class="menu-item-title">{{name}}</h3>
              <p class="menu-item-details">{{description}}</p>
            </div>
          </div>
          <hr class="visible-xs" />
        </div>`;
  };

  global.$dc = dc;
})(window);
