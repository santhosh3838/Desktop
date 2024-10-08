import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewHospitalComponent } from '../new-hospital/new-hospital.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf,NewHospitalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
}
