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
        