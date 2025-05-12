import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../enviroments/enviroment';

export interface Doctor {
    id?: number;
    name: string;
    surname: string;
    lastname: string;
    specialization: string;
}

export interface ApiResponse {
  message: string;
  data: Doctor[];
}

@Injectable({
  providedIn: 'root'
})

export class DoctorService {
  private apiUrl = environment.apiUrl + 'doctor';

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
  return this.http.get<ApiResponse>(this.apiUrl).pipe(
    map((response:any) => response.data)
  );
}

  getDoctor(id: number): Observable<Doctor> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`).pipe(
    map((response:any) => response.data)
  );
  }

  addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.apiUrl, doctor);
  }

  updateDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(`${this.apiUrl}/${doctor.id}`, doctor);
  }

  deleteDoctor(id: number): Observable<void> {
     return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`).pipe(
    map((response:any) => response.data)
  );
  }
}
