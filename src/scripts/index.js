/* ---- Sticky CSS effect */
window.addEventListener('scroll', () => {
	var header = document.querySelector('#header')
	header.classList.toggle('sticky', window.scrollY > 50)
})

/* ---- Responsive menu */
class MobileNavbar {

	// Atribuição dos itens recebidos via html para o construtor
	constructor(mobileMenu, nav, navLinks) {

		this.mobileMenu = document.querySelector(mobileMenu);
		this.nav = document.querySelector(nav);
		this.navLinks = document.querySelectorAll(navLinks);
		this.activeClass = "active";

		this.handleClick = this.handleClick.bind(this)
	}

	// Animação nos list items
	animateLinks() {
		this.navLinks.forEach((link) => {
			link.style.animation 
				? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`)
		})
	}

	// Ao botão de menu-mobile ser clicado irá ocorrer os seguintes eventos
	handleClick() {
		this.nav.classList.toggle(this.activeClass)
		this.mobileMenu.classList.toggle(this.activeClass)
		this.animateLinks()
	}

	addClickEvent() {
		this.mobileMenu.addEventListener('click', this.handleClick)

		this.navLinks.forEach((link) =>
	      link.addEventListener("click", this.handleClick),
	    );
	}

	// Classe para ser chamada que irá englobar as outras
	init() {
		if(this.mobileMenu) {
			this.addClickEvent()
		}

		return this
	}
}

const mobileNavbar = new MobileNavbar(
	"#mobile-menu",
	"#nav",
	"#nav ul li"
)

mobileNavbar.init();