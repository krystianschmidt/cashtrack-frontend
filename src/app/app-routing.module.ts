import { NgModule } from '@angular/core';
import {mapToCanActivate, PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";
import {LoginGuard} from "./guards/login.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: mapToCanActivate([AuthGuard])
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then( m => m.AuthenticationModule),
    canActivate: mapToCanActivate([LoginGuard])
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
