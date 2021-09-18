import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserDataResolver } from './user/users/users.resolver';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'user',
    children: [
      {
        path: 'register',
        
        loadChildren: () => import('./user/register/register.module').then(m => m.RegisterPageModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./user/users/users.module').then( m => m.UsersPageModule)
      },
    ]
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
