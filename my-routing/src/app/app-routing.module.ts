import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  // Homepage
  // site.com/homepage
  {
    path: 'homepage',
    component: HomepageComponent
  },

  // About 
  // site.com/about
  {
    path: 'about',
    component: AboutComponent
  },

  // Contact
  // site.com/contact
  {
    path: 'contact',
    component: ContactComponent
  },


  // Default Route
  // site.com/ --> site.com/homepage
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
    // component: HomepageComponent
  },

  // WildCard Route
  // site.com/azert
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
    // component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
