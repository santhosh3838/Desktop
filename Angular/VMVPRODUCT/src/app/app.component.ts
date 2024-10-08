import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ApiResponseModel, Hospital, User } from '../core/classes/Hospital';
import { FormsModule } from '@angular/forms';
import { HospitalListService } from './services/hospital-list.service';
import { NgIf } from '@angular/common';
import { AppointmentlistComponent } from "./appointmentlist/appointmentlist.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf, RouterLink, AppointmentlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 title='VMVPRODUCT';
  userObj: User = new User();
  loggedHospitalData: Hospital = new Hospital();
  private hospitalService = inject(HospitalListService);
private router=inject(Router)

  constructor() {
    const loggedata = localStorage.getItem('practologin');
    if (loggedata != null) {
      this.loggedHospitalData=JSON.parse(loggedata);
    }
  }


  showLogin() {
    const model = document.getElementById('Login-Modal')
    if (model != null) {
      model.style.display = 'block'
    }
  }
  onLogin() {
    this.hospitalService.login(this.userObj).subscribe((res: ApiResponseModel) => {
      debugger

      if (res.result) {
        this.loggedHospitalData = res.data;
        localStorage.setItem('practologin', JSON.stringify(res.data))
        this.CloseLogin();
        
      } else {
        alert(res.message)
      }
    })
  }
  Logoff() {
    localStorage.removeItem('practologoff')
    this.loggedHospitalData = new Hospital();
    this.router.navigateByUrl('home')
  }
  CloseLogin() {
    const model = document.getElementById('Login-Modal')
    if (model != null) {
      model.style.display = 'none'
    }
  }
}
