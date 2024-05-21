import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcademicHistoryComponent } from './academic-history.component';

describe('AcademicHistoryComponent', () => {
  let component: AcademicHistoryComponent;
  let fixture: ComponentFixture<AcademicHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicHistoryComponent]
    });
    fixture = TestBed.createComponent(AcademicHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
