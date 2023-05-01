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


// Fetch data from json file

fetch("./json/categories.json")
.then((response) => response.json())
.then((data) => showInfo(data));

function showInfo(data) {

let beverage = data.categories.beverages(key);
console.log(beverage);
for (let i = 0; i < beverage.length; i++) {
  console.table(beverage[i].name);
  showLoading("#main-content");
    document.querySelector("#main-content").innerHTML =
      `<h2 id="menu-categories-title" class="text-center">
      category Menu</h2>    
        
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

}

}



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
$dc.loadMenuCategories() = function () {  
  
 };
 
  global.$dc = dc;
})(window);
