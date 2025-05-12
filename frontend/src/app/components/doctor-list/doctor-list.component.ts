import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router, ActivatedRoute } from '@angular/router';
import { DoctorService,Doctor } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] = [];

  constructor(private doctorService: DoctorService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void {
    this.doctorService.getDoctors().subscribe((doctors) => {
      console.log(doctors,'doctors');	
      this.doctors = doctors;
    });
  }

  addDoctor(): void {
    this.router.navigate(['/doctor/new']);
  }

  updateDoctor(id:number): void {
    this.router.navigate(['/doctor/edit',id]);
  }

  deleteDoctor(id: number): void {
    this.doctorService.deleteDoctor(id).subscribe(() => {
      this.getDoctors();
    });
  }

  getListAppoiment(id:number): void {
    this.router.navigate(['/list/appointment',id]);
  }

}
