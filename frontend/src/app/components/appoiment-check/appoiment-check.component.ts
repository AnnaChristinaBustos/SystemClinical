import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  HistoryClinicalService,
  MedicalRecord,
} from 'src/app/services/history-clinical.service';
import {
  Appoiment,
  AppoimentService,
} from 'src/app/services/appoiment.service';

@Component({
  selector: 'app-appoiment-check',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './appoiment-check.component.html',
  styleUrls: ['./appoiment-check.component.scss'],
})
export class AppoimentCheckComponent {
  medicalRecord: MedicalRecord = {
    id: 0,
    id_doctor: 0,
    id_pacient: 0,
    treatment: '',
    diagnosis: '',
    date: '',
  };

  appoiment: Appoiment = {
    id_doctor: 0,
    id_pacient: 0,
    motive: '',
    status: 'Confirmada',
    date: '',
  };

  medicalRecords: MedicalRecord[] = [];

  id?: number;

  constructor(
    private historyClinicalService: HistoryClinicalService,
    private appoimentService: AppoimentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.appoimentService.getAppoiment(this.id).subscribe((data) => {
        console.log(data, 'data');
        this.appoiment = data;
        this.getClinicalHistory();
      });
    }
  }

  getClinicalHistory(): void {
    console.log(this.appoiment.id_pacient, 'id_pacient');
    this.historyClinicalService
      .getHistoryClinicalByPacient(this.appoiment.id_pacient)
      .subscribe((data) => {
        this.medicalRecords = data;
      });
  }

  saveMedicalRecord(): void {
    this.medicalRecord.id_doctor = this.appoiment.id_doctor;
    this.medicalRecord.id_pacient = this.appoiment.id_pacient;
    const now = new Date();
    this.medicalRecord.date = now.toISOString().slice(0, 16);
    this.appoiment.status = 'Finalizada';
    this.appoimentService.updateAppoiment(this.appoiment).subscribe(() => {
      this.historyClinicalService
        .saveHistoryClinical(this.medicalRecord)
        .subscribe(() => {
          this.router.navigate(['/listDoctor']);
        });
    });
  }
  cancelMedicalRecord(): void {
    this.medicalRecord = {
      id: 0,
      id_doctor: 0,
      id_pacient: 0,
      treatment: '',
      diagnosis: '',
      date: '',
    };
    this.router.navigate(['/listDoctor']);
  }
}
