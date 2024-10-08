import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Constant } from '../../constants/constant';
import { ApiResponseModel, Hospital, User } from '../../core/classes/Hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalListService {

  constructor(private http:HttpClient) {

   }
   registerhospital(obj:Hospital):Observable<ApiResponseModel>{
return this.http.post<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.ADD_NEW_HOSPITAL, obj)
   }
   login(obj:User):Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.Login, obj)
       }

     
}
