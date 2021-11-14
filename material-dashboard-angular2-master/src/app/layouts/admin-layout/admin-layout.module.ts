import { SecretariaFormsComponent } from './../../secretaria-forms/secretaria-forms.component';
import { RectorFormsComponent } from './../../rector-forms/rector-forms.component';
import { RectorProfileComponent } from './../../rector-profile/rector-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayout } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { FormsComponent } from '../../forms/forms.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { DepartamentoComponent } from './../../departamento/departamento.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SecretariaProfileComponent } from 'app/secretaria-profile/secretaria-profile.component';
//import { AdminLayout } from './admin-layout.routing';

@NgModule({
  imports: [
    CommonModule,
    AdminLayout,
    //RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    FormsComponent,
    TableListComponent,
    NotificationsComponent,
    DepartamentoComponent,
    RectorProfileComponent,
    RectorFormsComponent,
    SecretariaFormsComponent,
    SecretariaProfileComponent,
  ]
})

export class AdminLayoutModule {}
