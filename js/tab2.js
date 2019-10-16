/*function openCity2(evt, cityName2) {
 
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active2", "");
  }
  document.getElementById(cityName2).style.display = "block";
  evt.currentTarget.className += " active2";
}*/


/*
document.getElementById("defaultOpen2").click();*/


/*
function openCity2(evt2, Name2) {
  var activeClass = evt2.target.classList.contains("active2")
  if(!activeClass){
    var i, tabcontent2, tablinks2;
    tabcontent2 = document.getElementsByClassName("tabcontent2".split("-")[0]);
   /*tabcontent2 = document.getElementsByClassName("tabcontent2");*/
    /*for (i = 0; i < tabcontent2.length; i++) {
      tabcontent2[i].style.display = "none";
    }
    tablinks2 = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks2.length; i++) {
      tablinks2[i].className = tablinks2[i].className.replace(" active2", "");
    }
    document.getElementById(Name2).style.display = "block";
    evt2.currentTarget.className += " active2";
  } else {
    document.getElementById(Name2).style.display = "none";
    evt2.target.classList.remove("active2");
  }
}

document.getElementById("defaultOpen2").click();
document.getElementById("defaultOpen3").click();

*/

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