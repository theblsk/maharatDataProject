import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'mainPage',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  pictureArray = [
    '../../assets/img/carousel3.jpg',
    '../../assets/img/carousel2.jpg',
    '../../assets/img/carousel1.jpg',
  ]





  ngOnInit(): void {
    const introObserver = new IntersectionObserver(entries =>{
      const restOfContent = entries[0]
      const navbar = document.getElementById('navbar')
      navbar?.classList.toggle('navBarScrolled', restOfContent.isIntersecting)
    },
    {threshold: 0.1})

    introObserver.observe(document.getElementById('restOfContent') as Element)

    const creditsObserver = new IntersectionObserver(entries=>{
      const credits = entries[0]
      const creditsContainer = document.getElementById('creditsContainer')
      if (credits.isIntersecting)
      {
        creditsContainer.style.animation = 'textAppear 800ms ease'
      }
      
    })
    creditsObserver.observe(document.getElementById('credits') as Element)
  }

}
