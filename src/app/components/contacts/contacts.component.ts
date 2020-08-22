import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToLinkedIn() {
    window.location.href ='https://www.linkedin.com/in/julia-roldi/';
  }

  goToGitHub() {
    window.location.href ='https://github.com/juliacomj';
  }

  goToGmail() {
    window.location.href ='mailto:julialcantara.ra@gmail.com?Subject=Oi';
  }

}
