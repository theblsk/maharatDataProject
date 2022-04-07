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

  show(entry: any) {
    let guysToRemove = document.querySelectorAll('.stat');

    guysToRemove.forEach((item) => {
      let extract = item as HTMLElement;
      if (extract.classList.contains('show')) {
        extract.classList.remove('show');
        extract.classList.toggle('hide')
      }
    });
    let guyToShow = document.getElementById(entry);
    if (guyToShow?.classList.contains('hide')) {
      guyToShow.classList.remove('hide');
      guyToShow.classList.toggle('show');
    }
  }
}
