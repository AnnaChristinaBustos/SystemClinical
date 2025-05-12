import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryClinicalService, MedicalRecord } from 'src/app/services/history-clinical.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-history-list-pacient',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './history-list-pacient.component.html',
  styleUrls: ['./history-list-pacient.component.scss']
})
export class HistoryListPacientComponent {
    medicalRecords: MedicalRecord[] = [];
  
    id?: number;
    pacientName: string = '';
  
    constructor(
      private historyClinicalService: HistoryClinicalService,
      private router: Router,
      private route: ActivatedRoute
    ) {}
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      if (this.id) {
          this.getClinicalHistory(this.id);
      }
    }
  
    getClinicalHistory(id:number): void {
      this.historyClinicalService
        .getHistoryClinicalByPacient(id)
        .subscribe((data) => {
          this.medicalRecords = data;
          this.pacientName = this.medicalRecords[0].pacient?.name ?? 'Desconocido';
        });
    }
  

}
