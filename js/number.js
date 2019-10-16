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