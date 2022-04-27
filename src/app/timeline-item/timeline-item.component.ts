import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'timelineItem',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.css'],
})
export class TimelineItemComponent implements OnInit {
  @Input() className = '';
  @Input() itemID = '';
  @Input() navImageSRC = '';
  @Input() imageSRC = ''
  @Input() imageID = '';
  @Input() headLine = ''
  @Input() textContent = ''
  constructor() {}
  ngOnInit(): void {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        const item = entries[0];
        const container = document.getElementById(this.imageID);
        const image = container?.getElementsByClassName('navImage')
        if (image)
          image[0]?.classList.toggle('navImageEnlarged', item.isIntersecting);
        const timeText = container?.getElementsByClassName('timeText')
        if (timeText)
          timeText[0].classList.toggle('show', item.isIntersecting)
      },
      { threshold: 1 }
    );

    imageObserver.observe(document.getElementById(this.itemID) as Element);
  }
}
