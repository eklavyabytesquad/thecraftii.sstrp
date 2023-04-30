
		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				document.getElementById("myBtn").classList.add("show");
			} else {
				document.getElementById("myBtn").classList.remove("show");
			}
		}
		function topFunction() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}
		document.getElementById('nav-menu-btn').addEventListener('click', function() {
			var menu = document.getElementById('menu');
			if (menu.style.display === 'block') {
			  menu.style.display = 'none';
			} else {
			 menu.style.display = 'block';
			}
		  });
		  const navMenuBtn = document.getElementById('nav-menu-btn');
const menu = document.getElementById('menu');

navMenuBtn.addEventListener('click', () => {
  navMenuBtn.classList.toggle('active');
  menu.classList.toggle('active');

  const liElements = menu.querySelectorAll('li');
  liElements.forEach(li => {
    li.classList.toggle('active');
  });
});