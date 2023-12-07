class NavBar {
  constructor(menuAmburguer, menuBar, menu) {
    this.menuAmburguer = document.querySelector(menuAmburguer);
    this.menuBar = document.querySelector(menuBar);
    this.menu = document.querySelectorAll(menu);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind();
  }

  

  handleClick() {
    console.log(this);
    this.NavBar.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.menuAmburguer.addClickEventListener("click", this.handleClick);
  }

  init() {
    if (this.menuAmburguer) {
      this.addClickEvent();
    }
    return this;
  }

const menuAmburguer = new this.menuAmburguer(
  ".menuAmburguer",
  ".menuBar",
  ".menu");
}
