
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  onWindowScroll(event: any) {
    let element = document.querySelector('.back-to-top') as HTMLElement;
    let scrollTop = event.srcElement.children[0].scrollTop;
   

    if (scrollTop > 200) {
      element.style.display="inline";
    } else {
      element.style.display="none";
      
    }
  }

}
