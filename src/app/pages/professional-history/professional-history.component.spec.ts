import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfessionalHistoryComponent } from './professional-history.component';

describe('ProfessionalHistoryComponent', () => {
  let component: ProfessionalHistoryComponent;
  let fixture: ComponentFixture<ProfessionalHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalHistoryComponent]
    });
    fixture = TestBed.createComponent(ProfessionalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
