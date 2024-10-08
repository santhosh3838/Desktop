import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 import { HeaderComponent } from './header/header.component';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, CommonModule,FormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First-angular-app';
  isDisabled:boolean=false;
  isActive:boolean=true;
name: any;

  keyEnter(event:any){
   console.log(event.keyCode);
  }
  keyupfiltering(event:any){ 
    console.log(event.target.value);
  }

  username:string="";


  updateUsername(username:HTMLInputElement){
    this.username=username.value;
  }
  isAdmin:boolean=true;
  isMember:boolean=false; 
  isGuest:boolean=true;
role:string="user";
}
