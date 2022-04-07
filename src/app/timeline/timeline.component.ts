import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  className = 'timelineItem'
  alternClassName = 'timelineItemAltern'
  item1 = 'item1'
  item2 = 'item2'
  item3 = 'item3'
  picArray = [
    '../../assets/icons/explosionIcon.svg',
    '../../assets/icons/lockdownIcon.svg',
    '../../assets/icons/rainIcon.svg'

  ]
  constructor() { }

  ngOnInit(): void {

    
  }

}
