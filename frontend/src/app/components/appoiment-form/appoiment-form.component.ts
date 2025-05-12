import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appoiment, AppoimentService } from 'src/app/services/appoiment.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Doctor, DoctorService } from 'src/app/services/doctor.service';
import { Pacient, PacientService } from 'src/app/services/pacient.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appoiment-form',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './appoiment-form.component.html',
  styleUrls: ['./appoiment-form.component.scss']
})
export class AppoimentFormComponent {
  appoiment:Appoiment = {
    id_doctor: 0,
    id_pacient: 0,
    motive: '',
    status: 'Confirmada',
    date: ''
  }

  doctors:Doctor[] = [];
  pacients:Pacient[] = [];

  constructor(
    private appoimentService: AppoimentService,
    private doctorService: DoctorService,
    private pacientService:PacientService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  saveAppoiment(): void {
      this.appoimentService.saveAppoiment(this.appoiment).subscribe(() => {
        this.router.navigate(['/listDoctor']);
      });
  }

  cancelAppoiment(): void {
    this.appoiment = {
      id_doctor: 0,
      id_pacient: 0,
      motive: '',
      status: '',
      date: ''
    }
  }

  ngOnInit(): void {
    this.getDoctors();
    this.getPacients();
  }


    getDoctors(): void {
    this.doctorService.getDoctors().subscribe((doctors) => {
      console.log(doctors,'doctors');	
      this.doctors = doctors;
    });
  }

  getPacients(): void {
    this.pacientService.getPacients().subscribe((pacient) => {
      console.log(pacient,'pacient');	
      this.pacients = pacient;
    });
  }

}
