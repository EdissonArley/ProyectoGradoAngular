import { UserProfileService } from './../service/user-profile.service';
import { Usuario } from './../model/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  usuarios : Usuario[];
  constructor(private userProfileService:UserProfileService) { }

  ngOnInit(): void {
    this.userProfileService.traerUsuario().subscribe(e=> this.usuarios = e);
  }


}
