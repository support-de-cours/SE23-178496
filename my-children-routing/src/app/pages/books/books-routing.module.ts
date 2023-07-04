import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ReadComponent } from './pages/read/read.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';
import { DeleteComponent } from './pages/delete/delete.component';

const routes: Routes = [

  // site.com/books             Liste des livres
  // site.com/books/create      Creation d'un livre
  // site.com/books/42          Affiche le detail d'un livre
  // site.com/books/42/edit     Modifier un livre
  // site.com/books/42/delete   Supprime un livre


  // site.com/books             Liste des livres
  // site.com/book              Creation d'un livre
  // site.com/book/42           Affiche le detail d'un livre
  // site.com/book/42/edit      Modifier un livre
  // site.com/book/42/delete    Supprime un livre

  // site.com/a
  // site.com/a/b
  // site.com/a/b/c

  // Index
  {
    path: 'books',
    component: IndexComponent
  },

  // Route "book" and "book/children"
  // site.com/book
  {
    path: 'book',
    children: [
      
      // Create
      // site.com/book/
      {
        path: '',
        component: CreateComponent
      },

      // Read
      // site.com/book/42
      {
        path: ':id',
        children: [

          // Read
          // site.com/book/42
          {
            path: '',
            component: ReadComponent
          },

          // Update
          // site.com/book/42/edit
          {
            path: 'edit',
            component: UpdateComponent
          },

          // Delete
          // site.com/book/42
          {
            path: 'delete',
            component: DeleteComponent
          },

        ]
      }
    ]
  }



  // {
  //   path: 'book',
  //   component: CreateComponent,
  //   children: [

  //     // Read
  //     // site.com/book/42
  //     {
  //       path: ':id',
  //       component: ReadComponent
  //     }
  //   ]
  // }











  // // Index
  // // site.com/books             Liste des livres
  // {
  //   path: 'books',
  //   component: IndexComponent
  // },

  // // Create
  // // site.com/book              Creation d'un livre
  // {
  //   path: 'book',
  //   component: CreateComponent
  // },

  // // Read
  // // site.com/book/42           Affiche le detail d'un livre
  // {
  //   path: 'book/:id',
  //   component: ReadComponent
  // },

  // // Update
  // // site.com/book/42/edit      Modifier un livre
  // {
  //   path: 'book/:id/edit',
  //   component: UpdateComponent
  // },

  // // Delete
  // // site.com/book/42/delete    Supprime un livre
  // {
  //   path: 'book/:id/delete',
  //   component: DeleteComponent
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
