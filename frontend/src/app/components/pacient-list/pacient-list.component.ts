import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Pacient, PacientService } from 'src/app/services/pacient.service';

@Component({
  selector: 'app-pacient-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './pacient-list.component.html',
  styleUrls: ['./pacient-list.component.scss']
})
export class PacientListComponent implements OnInit {
  pacients:Pacient[] = [];

  constructor(private pacientService:PacientService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getPacients();
  }
  getPacients(): void {
    this.pacientService.getPacients().subscribe((pacient) => {
      console.log(pacient,'pacient');	
      this.pacients = pacient;
    });
  }
  addPacient(): void {
    this.router.navigate(['/pacient/new']);
  }
  updatePacient(id:number): void {
    this.router.navigate(['/pacient/edit',id]);
  }
  deletePacient(id: number): void {
    this.pacientService.deletePacient(id).subscribe(() => {
      this.getPacients();
    });
  }

  getHistory(id:number): void {
    this.router.navigate(['/history/clinical',id]);
  }

}
