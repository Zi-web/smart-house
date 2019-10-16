var isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }
 
    document.addEventListener("DOMContentLoaded", scrolling, false);
 
    var listItems = document.querySelectorAll(".chance__item--1bg, .chance__item--2bg, .chance__item--3bg, .chance__item--4bg");
    var firstBox = document.querySelector("#firstBox");
    var secondBox = document.querySelector("#secondBox");
    var listItems2 = document.querySelectorAll(".chance__text");
 
   function scrolling(e) {
 
        for (var i = 0; i < listItems.length && listItems2.length; i++) {
        var listItem = listItems[i];
        var listItem2 = listItems2[i];
 
        if (isPartiallyVisible(listItem)) {
          listItem.classList.add("animated");
          listItem2.classList.add("animated2");
        }
        else {
          listItem.classList.remove("animated");
          listItem2.classList.remove("animated2");
        }
      }
    }


    function isPartiallyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
      var height = elementBoundary.height;
 
      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
 
    function isFullyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
 
      return ((top >= 0) && (bottom <= window.innerHeight));
    }