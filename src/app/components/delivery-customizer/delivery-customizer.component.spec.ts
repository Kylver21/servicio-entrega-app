import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCustomizerComponent } from './delivery-customizer.component';

describe('DeliveryCustomizerComponent', () => {
  let component: DeliveryCustomizerComponent;
  let fixture: ComponentFixture<DeliveryCustomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryCustomizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryCustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
