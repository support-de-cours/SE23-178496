import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Default Route
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  },

  // WildCard Route
  {
    path: '**',
    loadChildren: () => import('./core/pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
