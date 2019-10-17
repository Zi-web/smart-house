/*menu*/
document.getElementById("menu__icon").onclick = function() {open()};
      function open() {
    document.getElementById("menu").classList.toggle("menu_state_open");
}
/*number*/
window.onload=function(){
var number = document.querySelector('.economy__item');
var numberTop = number.getBoundingClientRect().top;
		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > numberTop - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
					function number_to(id,from,to,duration) {
						var element = document.getElementById(id);
						var start = new Date().getTime();
					setTimeout(function() {
					    var now = (new Date().getTime()) - start;
					    var progress = now / duration;
					    var result = Math.floor(((to - from) * progress + from)/1)*1;
					    element.innerHTML = progress < 1 ? result : to;
					    if (progress < 1) setTimeout(arguments.callee, 10);
					}, 10);

					}
					number_to("test",0,20,2000);
					number_to("test1",0,10,1500);
				}
			})
			}
/*popup-form*/
'use strict';

        var link_form = document.querySelectorAll('.phone__btn');
        var popup_form = document.querySelector('.form-wrap');
        var close_form = popup_form.querySelector('.form__close');
        var overlay_form = document.querySelector('.popup-form');

for (var i = 0; i < link_form.length; i++) {
        link_form[i].addEventListener('click', function(event) {
            event.preventDefault();
            popup_form.classList.add('form__show');
            overlay_form.classList.add('form__overlay-show');
        });

        close_form.addEventListener('click', function(event) {
            event.preventDefault();
            popup_form.classList.remove('form__show');
            overlay_form.classList.remove('form__overlay-show');
        });


        window.addEventListener('keydown', function(event) {
            if (event.keyCode === 27) {
                if (popup_form.classList.contains('form__show')) {
                popup_form.classList.remove('form__show');
                overlay_form.classList.remove('form__overlay-show');
                }
            }
        })
}
/*scroll*/
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
/*full slider*/
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
  var slides = document.getElementsByClassName("slider__item");
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
/*slider-video*/
  'use strict';

    var multiItemSlider = (function () {

      function _isElementVisible(element) {
        var rect = element.getBoundingClientRect(),
          vWidth = window.innerWidth || doc.documentElement.clientWidth,
          vHeight = window.innerHeight || doc.documentElement.clientHeight,
          elemFromPoint = function (x, y) { return document.elementFromPoint(x, y) };
        if (rect.right < 0 || rect.bottom < 0
          || rect.left > vWidth || rect.top > vHeight)
          return false;
        return (
          element.contains(elemFromPoint(rect.left, rect.top))
          || element.contains(elemFromPoint(rect.right, rect.top))
          || element.contains(elemFromPoint(rect.right, rect.bottom))
          || element.contains(elemFromPoint(rect.left, rect.bottom))
        );
      }

      return function (selector, config) {
        var
          _mainElement = document.querySelector(selector),
          _sliderWrapper = _mainElement.querySelector('.projects-slider__wrapper'),
          _sliderItems = _mainElement.querySelectorAll('.projects-slider__item'),
          _sliderControls = _mainElement.querySelectorAll('.projects-slider__control'),
          _sliderControlLeft = _mainElement.querySelector('.projects-slider__control_left'),
          _sliderControlRight = _mainElement.querySelector('.projects-slider__control_right'),
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width),
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),
          _html = _mainElement.innerHTML,
          _positionLeftItem = 0,
          _transform = 0,
          _step = _itemWidth / _wrapperWidth * 100,
          _items = [],
          _interval = 0,
          _states = [
            { active: false, minWidth: 0, count: 1 },
            { active: false, minWidth: 728, count: 2 },
            { active: false, minWidth: 992, count: 2 },
            { active: false, minWidth: 1200, count: 3 },
          ],
          _config = {
            isCycling: false,
            direction: 'right',
            interval: 7000,
            pause: true
          };

        for (var key in config) {
          if (key in _config) {
            _config[key] = config[key];
          }
        }

        var index, count;
        count = _sliderItems.length;
        for (index = 0; index < count; index++) {
          _items.push({ item: _sliderItems[index], position: index, transform: 0 });
        }

        var _setActive = function () {
          var _index = 0;
          var width = parseFloat(document.body.clientWidth);
          var index, count;
          count = _states.length;
          for (index = 0; index < count; index++) {
            _states[index].active = false;
            if (width >= _states[index].minWidth) {
              _index = index;
            }
          };
          _states[_index].active = true;
        }

        var _getActive = function () {
          var _index;
          var index, count;
          count = _states.length;
          for (index = 0; index < count; index++) {
            if (_states[index].active) {
              _index = index;
            }
          };
          return _index;
        }

        var position = {
          getItemMin: function () {
            var indexItem = 0;
            var index, count;
            count = _items.length;
            for (index = 0; index < count; index++) {
              if (_items[index].position < _items[indexItem].position) {
                indexItem = index;
              }
            };
            return indexItem;
          },
          getItemMax: function () {
            var indexItem = 0;
            var index, count;
            count = _items.length;
            for (index = 0; index < count; index++) {
              if (_items[index].position > _items[indexItem].position) {
                indexItem = index;
              }
            };
            return indexItem;
          },
          getMin: function () {
            return _items[position.getItemMin()].position;
          },
          getMax: function () {
            return _items[position.getItemMax()].position;
          }
        }

        var _transformItem = function (direction) {
          var nextItem;
          if (!_isElementVisible(_mainElement)) {
            return;
          }
          if (direction === 'right') {
            _positionLeftItem++;
            if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
              nextItem = position.getItemMin();
              _items[nextItem].position = position.getMax() + 1;
              _items[nextItem].transform += _items.length * 100;
              _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
            }
            _transform -= _step;
          }
          if (direction === 'left') {
            _positionLeftItem--;
            if (_positionLeftItem < position.getMin()) {
              nextItem = position.getItemMax();
              _items[nextItem].position = position.getMin() - 1;
              _items[nextItem].transform -= _items.length * 100;
              _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
            }
            _transform += _step;
          }
          _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        var _cycle = function (direction) {
          if (!_config.isCycling) {
            return;
          }
          _interval = setInterval(function () {
            _transformItem(direction);
          }, _config.interval);
        }

        var _controlClick = function (e) {
          e.preventDefault();
          if (e.target.classList.contains('projects-slider__control')) {
            var direction = e.target.classList.contains('projects-slider__control_right') ? 'right' : 'left';
            _transformItem(direction);
            clearInterval(_interval);
            _cycle(_config.direction);
          }
        };

        var _handleVisibilityChange = function () {
          if (document.visibilityState === "hidden") {
            clearInterval(_interval);
          } else {
            clearInterval(_interval);
            _cycle(_config.direction);
          }
        }

        var _refresh = function () {
          clearInterval(_interval);
          _mainElement.innerHTML = _html;
          _sliderWrapper = _mainElement.querySelector('.projects-slider__wrapper');
          _sliderItems = _mainElement.querySelectorAll('.projects-slider__item');
          _sliderControls = _mainElement.querySelectorAll('.projects-slider__control');
          _sliderControlLeft = _mainElement.querySelector('.projects-slider__control_left');
          _sliderControlRight = _mainElement.querySelector('.projects-slider__control_right');
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width);
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width);
          _positionLeftItem = 0;
          _transform = 0;
          _step = _itemWidth / _wrapperWidth * 100;
          _items = [];
          var index, count;
          count = _sliderItems.length;
          for (index = 0; index < count; index++) {
            _items.push({ item: _sliderItems[index], position: index, transform: 0 });
          };
        }

        var _setUpListeners = function () {
          _mainElement.addEventListener('click', _controlClick);
          if (_config.pause && _config.isCycling) {
            _mainElement.addEventListener('mouseenter', function () {
              clearInterval(_interval);
            });
            _mainElement.addEventListener('mouseleave', function () {
              clearInterval(_interval);
              _cycle(_config.direction);
            });
          }
          document.addEventListener('visibilitychange', _handleVisibilityChange, false);
          window.addEventListener('resize', function () {
            var
              _index = 0,
              width = parseFloat(document.body.clientWidth);
            var index, count;
            count = _states.length;
            for (index = 0; index < count; index++) {
              if (width >= _states[index].minWidth) {
                _index = index;
              }
            };
            if (_index !== _getActive()) {
              _setActive();
              _refresh();
            }
          });
        }

        // инициализация
        _setUpListeners();
        if (document.visibilityState === "visible") {
          _cycle(_config.direction);
        }
        _setActive();

        return {
          right: function () {
            _transformItem('right');
          },
          left: function () {
            _transformItem('left');
          },
          stop: function () {
            _config.isCycling = false;
            clearInterval(_interval);
          },
          cycle: function () {
            _config.isCycling = true;
            clearInterval(_interval);
            _cycle();
          }
        }

      }
    }());

    var slider = multiItemSlider('.projects-slider', {
      isCycling: true
    })
/*tab*/
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
/*tab2*/
(function () {
  var mama = document.getElementsByClassName('buttons__wrap');

  var _loop = function _loop(m) {
        var link = mama[m].getElementsByClassName('tablinks2');
var tab = mama[m].getElementsByClassName('tab2');

    var _loop2 = function _loop2(i) {
      link[i].addEventListener('click', function () {
        for (var u = 0; u < link.length; u++) {
          link[u].classList.remove('active2');
          tab[u].style.display = 'none';
        }

        this.classList.add('active2');
        tab[i].style.display = 'block';
      });
    };

    for (var i = 0; i < link.length; i++) {
      _loop2(i);
    }
  };

  for (var m = 0; m < mama.length; m++) {
    _loop(m);
  }
})();

document.getElementsByClassName('buttons__wrap')[0].getElementsByClassName('tablinks2');
document.getElementsByClassName('buttons__wrap')[1].getElementsByClassName('tablinks2');
/*youtube*/
"use strict";
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if(!document.getElementsByClassName) {
        // IE8 support
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i<j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    }
    else {
        var videos = document.getElementsByClassName("youtube");
    }

    var nb_videos = videos.length;
    for (var i=0; i<nb_videos; i++) {
        // Based on the YouTube ID, we can easily find the thumbnail image
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';

        // Overlay the Play icon to make it look like a video player
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);

        videos[i].onclick = function() {
            // Create an iFrame with autoplay set to true
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');

            // The height and width of the iFrame should be the same as parent
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;

            // Replace the YouTube thumbnail with YouTube Player
            this.parentNode.replaceChild(iframe, this);
        }
    }
});