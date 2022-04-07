import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'oneStat',
  templateUrl: './one-stat.component.html',
  styleUrls: ['./one-stat.component.css']
})
export class OneStatComponent implements OnInit {

  @Input() picture = ''

  constructor() { }

  ngOnInit(): void {
  }

}
