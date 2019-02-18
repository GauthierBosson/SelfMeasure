import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './guard/authentication.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthenticationGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'reg-perso-infos', loadChildren: './reg-perso-infos/reg-perso-infos.module#RegPersoInfosPageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule', canActivate: [AuthenticationGuard] },
  { path: 'historic', loadChildren: './historic/historic.module#HistoricPageModule', canActivate: [AuthenticationGuard] },
  { path: 'add-aliment', loadChildren: './add-aliment/add-aliment.module#AddAlimentPageModule', canActivate: [AuthenticationGuard] },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule', canActivate: [AuthenticationGuard]  },
  { path: 'calendar-detail', loadChildren: './calendar-detail/calendar-detail.module#CalendarDetailPageModule', canActivate: [AuthenticationGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
