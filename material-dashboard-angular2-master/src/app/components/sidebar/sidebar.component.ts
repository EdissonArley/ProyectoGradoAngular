import { Component, OnInit } from '@angular/core';
import {AuthState, onAuthUIStateChange} from "@aws-amplify/ui-components";

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  tipoUsuario: string;

  constructor() { }

  ngOnInit() {
    this.tipoUsuario = localStorage.getItem('tipoUsuario');
    console.log('Tipo de usuario es ' + this.tipoUsuario);
    if(this.tipoUsuario === 'rector'){
      ROUTES.push({ path: 'rector-profile', title: 'Perfil', icon: 'person', class: ''});
    }else if (this.tipoUsuario === 'estudiante'){  
         ROUTES.push({ path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' });
    ROUTES.push({ path: 'user-profile', title: 'Perfil',  icon:'person', class: '' });
    ROUTES.push({ path: 'forms', title: 'Formularios',  icon:'person', class: '' });
    ROUTES.push({ path: 'table-list', title: 'Consultas',  icon:'content_paste', class: '' });
  
  } else if(this.tipoUsuario === 'secretaria'){
    ROUTES.push({ path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' });
    ROUTES.push({ path: 'departamento', title: 'Departamento', icon: 'notifications', class: ''});
  }
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
