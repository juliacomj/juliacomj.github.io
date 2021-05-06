import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('openClose', [
      state('open', style({
        backgroundColor: '#F7F6F1'
      })),
      state('closed', style({
        backgroundColor: '#012B79'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ]
})
export class AppComponent {
  title = 'profile';
  isOpen = true;
  readonly linkedIn = 'https://www.linkedin.com/in/julia-roldi/';
  readonly github = 'https://github.com/juliacomj';
  readonly gmail = 'mailto:julialcantara.ra@gmail.com?Subject=Oi';


  toggle() {
    this.isOpen = !this.isOpen;
  }

  goToLink(link: string){
    window.location.href = link;
  }

}
