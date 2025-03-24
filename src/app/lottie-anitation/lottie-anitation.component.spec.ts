import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieAnitationComponent } from './lottie-anitation.component';

describe('LottieAnitationComponent', () => {
  let component: LottieAnitationComponent;
  let fixture: ComponentFixture<LottieAnitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottieAnitationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LottieAnitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
