import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';


export interface Pacient {
    id?: number;
    name: string;
    surname: string;
    lastname: string;
    age: number;
}

export interface ApiResponse {
  message: string;
  data: Pacient[];
}


@Injectable({
  providedIn: 'root'
})

export class PacientService {
  private apiUrl = environment.apiUrl + 'pacient';
  
  constructor(private http:HttpClient) { }

  getPacients():Observable<Pacient[]>{
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map((response:any) => response.data)
    );
  }
  getPacient(id: number): Observable<Pacient> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`).pipe(
      map((response:any) => response.data)
    );
  }
  addPacient(pacient: Pacient): Observable<Pacient> { 
    return this.http.post<Pacient>(this.apiUrl, pacient);
  }
  updatePacient(pacient: Pacient): Observable<Pacient> {
    return this.http.put<Pacient>(`${this.apiUrl}/${pacient.id}`, pacient);
  }
  deletePacient(id: number): Observable<void> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`).pipe(
      map((response:any) => response.data)
    );
  }

  
}
