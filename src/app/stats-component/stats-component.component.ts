import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'statistics',
  templateUrl: './stats-component.component.html',
  styleUrls: ['./stats-component.component.css'],
})
export class StatsComponentComponent implements OnInit {
  expectPic = '../../assets/stats/expectation.png';
  trustPic = '../../assets/stats/trust.png';

  constructor() {}

  ngOnInit(): void {}

  choose(entry) {
    let list = document.getElementById('chooseList');
    let elements = list.getElementsByClassName('list-group-item');
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.toString().includes('active'))
          elements[i].classList.remove('active');
      }
    }
    let chosen = document.getElementById(entry);
    chosen.classList.toggle('active');
  }

  show(entry: any) {
    let guysToRemove = document.querySelectorAll('.stat');

    guysToRemove.forEach((item) => {
      let extract = item as HTMLElement;
      if (extract.classList.contains('show')) {
        extract.classList.remove('show');
        extract.classList.toggle('hide');
      }
    });
    let guyToShow = document.getElementById(entry);
    if (guyToShow?.classList.contains('hide')) {
      guyToShow.classList.remove('hide');
      guyToShow.classList.toggle('show');
    }
  }
}
