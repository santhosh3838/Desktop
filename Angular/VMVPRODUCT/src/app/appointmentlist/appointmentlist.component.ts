import { Component, inject, OnInit } from '@angular/core';
import { ApiResponseModel, NewAppointment, User } from '../../core/classes/Hospital';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../services/appointment.service';
import { CommonModule, NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-appointmentlist',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './appointmentlist.component.html',
  styleUrl: './appointmentlist.component.css'
})
export class AppointmentlistComponent implements OnInit {
  loggedUserdata:User=new User();
  newappointment: NewAppointment = new NewAppointment();

  appointmentList: NewAppointment[] = [];
  // constructor(private appointservice:AppointmentService){

  // }  or
  appointserv = inject(AppointmentService);



  constructor() {
    const loggedata = localStorage.getItem('practologin');
    if (loggedata != null) {
      this.loggedUserdata=JSON.parse(loggedata);
      this.newappointment.hospitalId = JSON.parse(loggedata).hospitalId;
    }
  }
  ngOnInit(): void {
    this.loadgrid();
  
  }
  loadgrid(){
    if (this.loggedUserdata.userName=="vmv1"){
      this.getAllAppoints();
    }else{
      this.getAllAppointsbyhspId();
    }
  }
  bookAppointMent() {
    debugger
    this.appointserv.NewAppointment(this.newappointment).subscribe((res: ApiResponseModel) => {
      if (res.result) {
        alert('Appointment Created')
        this.getAllAppointsbyhspId();

      } else {
        console.log(res.message)
      }
    })
  }
  getAllAppointsbyhspId() {
    this.appointserv.GetAppointmentsByHospital(this.newappointment.hospitalId).subscribe((res: ApiResponseModel) => {
      this.appointmentList = res.data;
    })
  }
  getAllAppoints() {
    this.appointserv.getAlltheappointments().subscribe((res: ApiResponseModel) => {
      this.appointmentList = res.data;
    })
  }
}
