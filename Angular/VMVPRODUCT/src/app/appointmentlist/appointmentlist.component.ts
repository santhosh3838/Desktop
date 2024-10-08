import { Component, inject, OnInit } from '@angular/core';
import { ApiResponseModel, NewAppointment } from '../../core/classes/Hospital';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../services/appointment.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-appointmentlist',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './appointmentlist.component.html',
  styleUrl: './appointmentlist.component.css'
})
export class AppointmentlistComponent implements OnInit {
  newappointment: NewAppointment = new NewAppointment();

  appointmentList: NewAppointment[] = [];
  // constructor(private appointservice:AppointmentService){

  // }  or
  appointserv = inject(AppointmentService);



  constructor() {
    const loggedata = localStorage.getItem('practologin');
    if (loggedata != null) {
      this.newappointment.hospitalId = JSON.parse(loggedata).hospitalId;
    }
  }
  ngOnInit(): void {
    this.getAllAppoints();
  }
  bookAppointMent() {
    debugger
    this.appointserv.NewAppointment(this.newappointment).subscribe((res: ApiResponseModel) => {
      if (res.result) {
        alert('Appointment Created')
        this.getAllAppoints();

      } else {
        console.log(res.message)
      }
    })
  }
  getAllAppoints() {
    this.appointserv.GetAppointmentsByHospital(this.newappointment.hospitalId).subscribe((res: ApiResponseModel) => {
      this.appointmentList = res.data;
    })
  }
}
