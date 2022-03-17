import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mod1',
    loadChildren: () => import('./mod1/mod1.module').then((m) => m.Mod1Module),
  },
  {
    path: 'home',
    loadChildren: () => import('./mod2/mod2.module').then((m) => m.Mod2Module),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
