import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LugarDetailPage } from './pages/lugar-detail/lugar-detail.page';
import { AgregarLugarPage } from './pages/agregar-lugar/agregar-lugar.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'lugar-detail',
    loadChildren: () => import('./pages/lugar-detail/lugar-detail.module').then( m => m.LugarDetailPageModule)
  },
  {
    path: 'agregar-lugar',
    loadChildren: () => import('./pages/agregar-lugar/agregar-lugar.module').then( m => m.AgregarLugarPageModule)
  },

  { path: 'lugar/:id', component: LugarDetailPage },
  { path: 'agregar-lugar', component: AgregarLugarPage },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
