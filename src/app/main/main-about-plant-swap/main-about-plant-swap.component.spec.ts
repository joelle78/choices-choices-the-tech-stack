import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAboutPlantSwapComponent } from './main-about-plant-swap.component';

describe('MainAboutPlantSwapComponent', () => {
  let component: MainAboutPlantSwapComponent;
  let fixture: ComponentFixture<MainAboutPlantSwapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainAboutPlantSwapComponent]
    });
    fixture = TestBed.createComponent(MainAboutPlantSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
