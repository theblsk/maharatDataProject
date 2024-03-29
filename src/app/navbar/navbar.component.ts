import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  scroll(el: HTMLElement) {
      el.scrollIntoView({ behavior: 'smooth' });
  }
  showMenu() {
    let navOptions = document.getElementById('options');
    if (navOptions?.classList.toString() == 'optionsClosed') {
      navOptions.classList.remove('optionsClosed');
      navOptions.classList.toggle('options');
    } else if (navOptions?.classList.toString() == 'options') {
      navOptions.classList.remove('options');
      navOptions.classList.toggle('optionsClosed');
    }
  }
  close(entry) {
    let navOptions = document.getElementById('options');
    if (navOptions?.classList.toString() == 'options') {
      navOptions.classList.remove('options');
      navOptions.classList.toggle('optionsClosed');
    }
    let el = document.getElementById(entry)
    this.scroll(el)
  }
  openPage(entry)
  {
    window.open(entry)
  }
}
