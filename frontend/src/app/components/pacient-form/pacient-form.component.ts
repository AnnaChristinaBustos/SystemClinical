import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Pacient, PacientService } from 'src/app/services/pacient.service';

@Component({
  selector: 'app-pacient-form',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './pacient-form.component.html',
  styleUrls: ['./pacient-form.component.scss']
})
export class PacientFormComponent {
  pacient:Pacient = {
    name: '',
    surname: '',
    lastname: '',
    age: 0,
  };
  id?: number;

  constructor(
    private pacientService: PacientService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.pacientService.getPacient(this.id).subscribe(data => {
        this.pacient = data;
      });
    }
  }

  savePacient(): void {
    if (this.id) {
      this.pacientService.updatePacient(this.pacient).subscribe(() => {
        this.router.navigate(['/listPacient']);
      });
    } else {
      this.pacientService.addPacient(this.pacient).subscribe(() => {
        this.router.navigate(['/listPacient']);
      });
    }
  }
  
  comeback(): void {
    this.router.navigate(['/listPacient']);
  }

}
