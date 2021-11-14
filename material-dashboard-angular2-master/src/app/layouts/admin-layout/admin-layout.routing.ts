import { AdminLayoutComponent } from './admin-layout.component';
import { RouterModule, Routes } from '@angular/router';

import { RectorProfileComponent } from './../../rector-profile/rector-profile.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { FormsComponent } from '../../forms/forms.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { DepartamentoComponent } from './../../departamento/departamento.component';
import { NgModule } from '@angular/core';
import { RectorFormsComponent } from 'app/rector-forms/rector-forms.component';
import { SecretariaFormsComponent } from 'app/secretaria-forms/secretaria-forms.component';
import { SecretariaProfileComponent } from 'app/secretaria-profile/secretaria-profile.component';

const routes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'forms',          component: FormsComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'departamento',   component: DepartamentoComponent},
    { path: 'rector-profile',   component: RectorProfileComponent},
    { path: 'rector-forms',   component: RectorFormsComponent},
    { path: 'secretaria-forms',   component: SecretariaFormsComponent},
    { path: 'secretaria-profile',   component: SecretariaProfileComponent},
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLayout { }

/*const routes: Routes = [
    {
      path: '',
      component: AdminLayoutComponent,
      children: [
        {
          path: 'user-profile',
          component: UserProfileComponent,
        }
      ],
    },
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AdminLayout { }*/
