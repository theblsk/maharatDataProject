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
        let listItem = document.getElementById(this.itemID);
        let image = listItem?.querySelector('.navImage');
        if (entries[0].intersectionRatio === 1) {
          if (image?.classList.toString() === 'navImage') {
            image.classList.remove('navImage');
            image.classList.toggle('navImageEnlarged');
          }
        } else if (entries[0].intersectionRatio === 0) {
          if (image?.classList.toString() === 'navImageEnlarged') {
            image.classList.remove('navImageEnlarged');
            image.classList.toggle('navImage');
          }
        }
      },
      { threshold: [1] }
    );
    observer.observe(document.getElementById(this.itemID) as Element);
  }
}
