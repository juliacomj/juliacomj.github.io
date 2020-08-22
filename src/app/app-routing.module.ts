import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AppComponent } from './app.component';
import { ExperienceComponent } from '../app/components/experience/experience.component'

const routes: Routes = [
    { path: '',
      redirectTo: '/experience',
      pathMatch: 'full'
    },
    { path: 'experience',
      component: ExperienceComponent,
    },
    { path:'contatcs',
      component: ContactsComponent,
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
