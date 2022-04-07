import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'mainPage',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  pictureArray = [
    'https://cdn.pixabay.com/photo/2016/10/05/17/26/indian-1717192_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/03/27/19/20/indian-1283789_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/09/16/01/03/girl-2754233_1280.jpg'
  ]





  ngOnInit(): void {
  }

}
