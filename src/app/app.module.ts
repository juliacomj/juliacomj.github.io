import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { UiThemeToggleService } from './services/ui-theme-toggle.service';
import { LocalStorageService } from './services/local-storage.service';

export function themeFactory(themeService: UiThemeToggleService){
  return () => themeService.setThemeOnStart();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ExperienceComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UiThemeToggleService,
    LocalStorageService,
    { provide: APP_INITIALIZER, useFactory: themeFactory, deps: [UiThemeToggleService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
