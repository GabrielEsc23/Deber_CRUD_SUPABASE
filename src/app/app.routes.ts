import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'poemas',
    pathMatch: 'full'
  },

  {
    path: 'poemas',
    loadComponent: () =>
      import('./pages/poemas/poemas.page')
      .then(m => m.PoemasPage)
  },

  {
    path: 'poemas-form',
    loadComponent: () =>
      import('./pages/poema-form/poema-form.page')
      .then(m => m.PoemaFormPage)
  },

  {
    path: 'poemas-form/:id',
    loadComponent: () =>
      import('./pages/poema-form/poema-form.page')
      .then(m => m.PoemaFormPage)
  },

  {
      path:'poema-detalle/:id',
      loadComponent:() =>
      import('./pages/poema-detalle/poema-detalle.page')
      .then(m=>m.PoemaDetallePage)
      }

];