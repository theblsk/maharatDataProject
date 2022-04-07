import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'timelineItem',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.css'],
})
export class TimelineItemComponent implements OnInit {
  @Input() className = '';
  @Input() itemID = '';
  @Input() imageSRC = '';

  constructor() {}

  ngOnInit(): void {
    var observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          let listItem = document.getElementById(this.itemID);
          let image = listItem?.querySelector('.navImage');
          if (entry.intersectionRatio === 1) {
            if (image?.classList.toString() === 'navImage') {
              image.classList.remove('navImage');
              image.classList.toggle('navImageEnlarged');
            }
          }           
        })
      },
      { threshold: [1] }
    );
    observer.observe(document.getElementById(this.itemID) as Element);
  }
}
