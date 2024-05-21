import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CareerHistoryComponent } from './career-history.component';

describe('CareerHistoryComponent', () => {
  let component: CareerHistoryComponent;
  let fixture: ComponentFixture<CareerHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareerHistoryComponent]
    });
    fixture = TestBed.createComponent(CareerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
