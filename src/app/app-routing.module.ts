import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'layout',
    loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'material',
    loadChildren: () => import('./pages/material/material.module').then(m => m.MaterialModule)
  },
  {
    path: 'demo-cart',
    loadChildren: () => import('./pages/demo-cart/demo-cart.module').then(m => m.DemoCartModule)
  },
  {
    path: 'pipe-view',
    loadChildren: () => import('./pages/pipe-view/pipe-view.module').then(m => m.PipeViewModule)
  },
  {
    path: 'reactive-form',
    loadChildren: () => import('./pages/reactive-form/reactive-form.module').then(m => m.ReactiveFormModule)
  },
  {
    path: 'my-service',
    loadChildren: () => import('./pages/my-service/my-service.module').then(m => m.MyServiceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
