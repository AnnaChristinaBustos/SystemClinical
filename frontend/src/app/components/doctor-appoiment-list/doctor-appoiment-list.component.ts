import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Appoiment,
  AppoimentService,
  AppointmentList,
} from 'src/app/services/appoiment.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-doctor-appoiment-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './doctor-appoiment-list.component.html',
  styleUrls: ['./doctor-appoiment-list.component.scss'],
})
export class DoctorAppoimentListComponent implements OnInit {
  appoiments: AppointmentList[] = [];
  constructor(
    private appoimentService: AppoimentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAppoiments();
  }

  getAppoiments(): void {
    const id = this.route.snapshot.params['id'];
    this.appoimentService
      .getAppoimentsByDoctor(id)
      .subscribe((appoiments: AppointmentList[]) => {
        this.appoiments = appoiments
          .filter((a) => a.id !== undefined) // Filtra entradas sin id
          .map((a) => ({
            id: a.id as number, // Forzamos a number porque ya filtramos undefined
            motive: a.motive,
            status: a.status,
            date: a.date,
            doctor: { name: a.doctor?.name ?? 'Desconocido' },
            pacient: { name: a.pacient?.name ?? 'Desconocido' },
          }));
      });
  }

  comeback(): void {
    this.router.navigate(['/listDoctor']);
  }

  checkAppoiment(id: number): void {
    this.router.navigate(['/appoiment/check/', id]);
  }
}
