import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Pacient } from './pacient.service';


export interface MedicalRecord {
  id: number;
  id_pacient: number;
  id_doctor: number;
  treatment: string;
  diagnosis: string;
  date: string;
  pacient?: Pacient;
}

export interface ApiResponse {
  message: string;
  data: [];
}


@Injectable({
  providedIn: 'root'
})
export class HistoryClinicalService {
  private apiUrl = environment.apiUrl + 'history';
  constructor(private http: HttpClient) { }

  getHistoryClinical(id: number): Observable<MedicalRecord[]> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`).pipe(
      map((response: any) => response.data)
    );
  }
  saveHistoryClinical(medicalRecord: MedicalRecord): Observable<MedicalRecord> {
    return this.http.post<MedicalRecord>(this.apiUrl, medicalRecord);
  }
  getHistoryClinicalByPacient(id: number): Observable<MedicalRecord[]> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/pacient/${id}`).pipe(
      map((response: any) => response.data)
    );
  }

  
}
