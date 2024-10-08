import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseModel, NewAppointment } from '../../core/classes/Hospital';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs/internal/Observable';
import { Constant } from '../../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  NewAppointment(obj: NewAppointment): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(environment.api_url + Constant.API_END_POINT.addNewAppointment, obj)
  }

  GetAppointmentsByHospital(id: number): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(environment.api_url + Constant.API_END_POINT.Get_appointments_ByHospital + id)
  }
}
