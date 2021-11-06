import { Component, OnInit } from '@angular/core';
import {AuthState, onAuthUIStateChange} from "@aws-amplify/ui-components";

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Perfil',  icon:'person', class: '' },
    { path: '/forms', title: 'Formularios',  icon:'person', class: '' },
    { path: '/table-list', title: 'Consultas',  icon:'content_paste', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/departamento', title: 'Departamento', icon: 'notifications', class: ''},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    onAuthUIStateChange((nextAuthState, authData) => {
      if (nextAuthState === AuthState.SignedIn) {
        console.log("user successfully signed in!");
        console.log("user data: ", authData);
      }
      if (!authData) {
        console.log("user is not signed in...");
      }
    });
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
