import { UserProfileService } from './../service/user-profile.service';
import { Usuario } from 'app/model/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  usuario : Usuario;
  
  constructor(private userProfileService:UserProfileService) { }

  ngOnInit(): void {
    this.userProfileService.traerUsuarioById(1).subscribe(e=> 
      {console.log(e);
      this.usuario = e});
  }


}
