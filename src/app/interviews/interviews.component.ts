import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {

  constructor() { }

  readMore(entry){
    let interview = document.getElementById(entry)
    interview.classList.toggle('interviewLarger')
    let text = interview.getElementsByClassName('interviewText')
    text[0].classList.toggle('textEffect')
    let button = interview.getElementsByClassName('getButton')
    button[0].classList.toggle('read-moreHidden')
    let arrow = interview.getElementsByClassName('getArrow')
    arrow[0].classList.toggle('arrowHidden')
  }


  ngOnInit(): void {
  }

}
