import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageComponent]
    });
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call openLink when Enter key is pressed', () => {
    const spy = spyOn(component, 'openLink');
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    const url = 'https://example.com';

    component.onKeydown(event, url);

    expect(spy).toHaveBeenCalledWith(url);
  });

  it('should call openLink when Space key is pressed', () => {
    const spy = spyOn(component, 'openLink');
    const event = new KeyboardEvent('keydown', { key: ' ' });
    const url = 'https://example.com';

    component.onKeydown(event, url);

    expect(spy).toHaveBeenCalledWith(url);
  });

  it('should not call openLink for other keys', () => {
    const spy = spyOn(component, 'openLink');
    const event = new KeyboardEvent('keydown', { key: 'a' });
    const url = 'https://example.com';

    component.onKeydown(event, url);

    expect(spy).not.toHaveBeenCalled();
  });
});
