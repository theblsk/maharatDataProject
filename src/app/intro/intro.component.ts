import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showMore(){
    let extraContent = document.getElementById('moreContent')
    extraContent?.classList.toggle('show')
    let button = document.getElementById('readMoreButton')
    button?.classList.toggle('hidden')
    let intro = document.getElementById('intro')
    intro?.classList.toggle('introductionBigger')
    let arrow = document.getElementById('arrowUp')
    arrow?.classList.toggle('showArrow')
  }
  hideExtra(){
    let extraContent = document.getElementById('moreContent')
    extraContent?.classList.remove('show')
    let button = document.getElementById('readMoreButton')
    button?.classList.remove('hidden')
    let intro = document.getElementById('intro')
    intro?.classList.remove('introductionBigger')
    let arrow = document.getElementById('arrowUp')
    arrow?.classList.remove('showArrow')
  }
}
