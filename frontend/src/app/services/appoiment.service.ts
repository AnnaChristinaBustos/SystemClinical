import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/enviroments/enviroment';

export interface Appoiment {
    id?: number;
    id_doctor: number;
    id_pacient: number;
    motive: string;
    status: string;
    date: string;
}

export interface AppointmentList {
  id?: number; // ahora puede ser undefined
  motive: string;
  status: string;
  date: string;
  doctor: {
    name: string;
  };
  pacient: {
    name: string;
  };
}



export interface ApiResponse {
  message: string;
  data: [];
}


@Injectable({
  providedIn: 'root'
})
export class AppoimentService {
  private apiUrl = environment.apiUrl + 'appoiment';

  constructor(private http:HttpClient) { }

  getAppoimentsByDoctor(id:number):Observable<AppointmentList[]>{
    return this.http.get<ApiResponse>(`${this.apiUrl}/doctor/${id}`).pipe(
      map((response:any) => response.data)
    );
  }

  saveAppoiment(appoiment: Appoiment): Observable<Appoiment> {
    return this.http.post<Appoiment>(this.apiUrl, appoiment);
  }

  getAppoiment(id: number): Observable<Appoiment> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`).pipe(
      map((response:any) => response.data)
    );
  }

  updateAppoiment(appoiment: Appoiment): Observable<Appoiment> {
    return this.http.put<Appoiment>(`${this.apiUrl}/${appoiment.id}`, appoiment);
  }

}
