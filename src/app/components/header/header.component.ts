import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiThemeToggleService } from '../../services/ui-theme-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  private DARK_THEME = "Dark Theme";
  private LIGHT_THEME = "Light Theme";
  theme = this.DARK_THEME;
  constructor(private router: Router,
              private themeSwitcher: UiThemeToggleService) { }

  ngOnInit(): void {
  }

  toggle(){
    this.themeSwitcher.toggle();
    this.theme = this.theme === this.DARK_THEME ? this.LIGHT_THEME : this.DARK_THEME;
  }

  goToContacts(){
    this.router.navigate(['/contatcs'])
  }

  goToExperience(){
    this.router.navigate(['/experience'])
  }

}
