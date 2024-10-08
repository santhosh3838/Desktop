import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiResponseModel, Hospital } from '../../core/classes/Hospital';
import { HospitalListService } from '../services/hospital-list.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-new-hospital',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './new-hospital.component.html',
  styleUrls: ['./new-hospital.component.css'],
})
export class NewHospitalComponent {
  public registrationForm: FormGroup; // Declare the FormGroup
  public hospitalObj: Hospital = new Hospital();
  private isShow: boolean = false;
private router=Inject(Router)
  constructor(private hospitalServ: HospitalListService, private fb: FormBuilder) {
    // Initialize the FormGroup
    this.registrationForm = this.fb.group({
      hospitalName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      userName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      hospitalAddress: ['', Validators.required],
      state: ['', Validators.required],
      hospitalCity: ['', Validators.required],
      hospitalId: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
      hospitalOwnerContactNo: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      email: ['', [Validators.required,Validators.email]],
    });
  }

  onRegister() {
     debugger
    if (this.registrationForm.invalid) {
      // If the form is invalid, mark all controls as touched to show errors
      Object.keys(this.registrationForm.controls).forEach(key => {
        this.registrationForm.controls[key].markAsTouched();
      });
      return; // Stop the function if the form is invalid
    }

    // If valid, fill the hospitalObj with form values
    this.hospitalObj = { ...this.registrationForm.value }; // Spread operator to copy form values

    this.hospitalServ.registerhospital(this.hospitalObj).subscribe((res: ApiResponseModel) => {
      if (res.result) {
        alert("Registration successful");
       this.router.navigateByUrl('app-root')
      } else {
        alert(res.message);
      }
    }, error => {
      alert(JSON.stringify(error));
    });
  }

  resetForm() {
    this.registrationForm.reset(); // Add reset functionality
  }
}
