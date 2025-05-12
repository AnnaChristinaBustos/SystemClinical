import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoimentCheckComponent } from './appoiment-check.component';

describe('AppoimentCheckComponent', () => {
  let component: AppoimentCheckComponent;
  let fixture: ComponentFixture<AppoimentCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppoimentCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppoimentCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
