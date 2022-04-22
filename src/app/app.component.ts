import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'maharatDataProj';



  ngOnInit(): void{

  }


  hide() {
    let nav = document.getElementById('options');
    if (nav?.classList.toString() == 'options') {
      nav.classList.remove('options');
      nav.classList.toggle('optionsClosed');
    }
  }
  showMenu() {
    let nav = document.getElementById('options');
    if (nav?.classList.toString() == 'optionsClosed') {
      nav.classList.remove('optionsClosed');
      nav.classList.toggle('options');
    } else if (nav?.classList.toString() == 'options') {
      nav.classList.remove('options');
      nav.classList.toggle('optionsClosed');
    }
  }
}
