import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppoimentListComponent } from './doctor-appoiment-list.component';

describe('DoctorAppoimentListComponent', () => {
  let component: DoctorAppoimentListComponent;
  let fixture: ComponentFixture<DoctorAppoimentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DoctorAppoimentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorAppoimentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
