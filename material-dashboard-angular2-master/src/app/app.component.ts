import { Component} from '@angular/core';
import {AuthState, onAuthUIStateChange} from "@aws-amplify/ui-components";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  /*ngOnInit(): void {
    onAuthUIStateChange((nextAuthState, authData) => {
      if (nextAuthState === AuthState.SignedIn) {
        console.log("user successfully signed in!");
        console.log("user data: ", authData);
      }
      if (!authData) {
        console.log("user is not signed in...");
      }
    });
  }*/
}
