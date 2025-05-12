import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Doctor, DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-form',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent {
  doctor:Doctor = {
    name: '',
    surname: '',
    lastname: '',
    specialization: '',
  };
  id?: number;

  constructor(
    private doctorService: DoctorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.doctorService.getDoctor(this.id).subscribe(data => {
        this.doctor = data;
      });
    }
  }

  saveDoctor(): void {
    if (this.id) {
      this.doctorService.updateDoctor(this.doctor).subscribe(() => {
        this.router.navigate(['/listDoctor']);
      });
    } else {
      this.doctorService.addDoctor(this.doctor).subscribe(() => {
        this.router.navigate(['/listDoctor']);
      });
    }
  }

  comeback(): void {
    this.router.navigate(['/listDoctor']);
  }

}
