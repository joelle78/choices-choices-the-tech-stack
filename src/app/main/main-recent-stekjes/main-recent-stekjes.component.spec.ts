import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRecentStekjesComponent } from './main-recent-stekjes.component';

describe('MainRecentStekjesComponent', () => {
  let component: MainRecentStekjesComponent;
  let fixture: ComponentFixture<MainRecentStekjesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainRecentStekjesComponent]
    });
    fixture = TestBed.createComponent(MainRecentStekjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
