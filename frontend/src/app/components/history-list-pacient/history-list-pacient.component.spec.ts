import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryListPacientComponent } from './history-list-pacient.component';

describe('HistoryListPacientComponent', () => {
  let component: HistoryListPacientComponent;
  let fixture: ComponentFixture<HistoryListPacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HistoryListPacientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryListPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
