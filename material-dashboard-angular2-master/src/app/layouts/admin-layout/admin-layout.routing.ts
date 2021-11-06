import { AdminLayoutComponent } from './admin-layout.component';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { FormsComponent } from '../../forms/forms.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { DepartamentoComponent } from './../../departamento/departamento.component';
import { NgModule } from '@angular/core';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'forms',          component: FormsComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'departamento',   component: DepartamentoComponent},
];

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
