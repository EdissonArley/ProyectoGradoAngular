import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { ChangeDetectorRef } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private ref: ChangeDetectorRef) { }
  user: CognitoUserInterface | undefined;
  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      
      if(authData){
        console.log('Ingreso....');
        this.user = authData as CognitoUserInterface;
        console.log(this.user['attributes'].email);
        if((this.user['attributes'].email.includes('disson'))){
          console.log('seta valor');
          localStorage.setItem('tipoUsuario', 'rector');
        }

        if((this.user['attributes'].email.includes('estudiante'))){
          localStorage.setItem('tipoUsuario', 'estudiante');
        }

        if((this.user['attributes'].email.includes('secretaria'))){
          localStorage.setItem('tipoUsuario', 'secretaria');
        }
        console.log(this.user['attributes'].email.includes('rector'));
        this.ref.detectChanges();
        
       this.router.navigate(['pages']);
      }
      console.log(authState);
    })
  }
}
