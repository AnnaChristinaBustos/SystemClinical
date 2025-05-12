import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoimentFormComponent } from './appoiment-form.component';

describe('AppoimentFormComponent', () => {
  let component: AppoimentFormComponent;
  let fixture: ComponentFixture<AppoimentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppoimentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppoimentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
