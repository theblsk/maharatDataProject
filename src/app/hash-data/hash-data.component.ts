import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hash-data',
  templateUrl: './hash-data.component.html',
  styleUrls: ['./hash-data.component.css']
})
export class HashDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  click(entry)
  {
    let container = document.getElementById('hashList')
    let others = container.getElementsByClassName('list-group-item')
    for (let i = 0; i< others.length;i++)
    {
      if (others[i].classList.contains('activeHash'))
      {
        others[i].classList.remove('activeHash')
      }
    }
    let clicked = document.getElementById(entry)
    if (!clicked.classList.contains('activeHash'))
    {
      clicked.classList.toggle('activeHash')
    }
    let imagesContainer = document.getElementById('hashImages')
    let otherImages = imagesContainer.getElementsByClassName('hashImage')
    for(let i = 0; i<otherImages.length; i++ )
    {
      if (otherImages[i].classList.contains('show'))
      {
        otherImages[i].classList.remove('show')
        otherImages[i].classList.toggle('hide')
      }
    }
    let imageId = entry + "Image"
    let imageToBeSet = document.getElementById(imageId)
    imageToBeSet.classList.remove('hide')
    imageToBeSet.classList.toggle('show')

  }

}
