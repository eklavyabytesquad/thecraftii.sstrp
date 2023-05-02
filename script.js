
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
const search = () =>{
	const searchbox = document.getElementById("search-item").value.toUpperCase();
	const storeitem = document.getElementById("product-list")
	const product = document.querySelectorAll(".product")
	const pname = storeitem.getElementsByTagName("h2")

	for(var i=0;1 <pname.length; i++){
		let match = product[i].getElementsByTagName('h2')[0];
		if (match) {
			let textvalue = match.textContent || match.innerHTML
		if
			(textvalue.toUpperCase().indexOf(searchbox) > -1 ){
				product[i].style.display = "";
			}else{
				product[i].style.display = "none";
			}
		}
	}
}
