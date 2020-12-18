import { AuthGuard } from './../services/authGuard/auth-guard.service';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '', loadChildren: () => import('../Modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'admin', loadChildren: () => import('../Modules/admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard]
      },
      {
        path: 'login', loadChildren: () => import('../Modules/authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
