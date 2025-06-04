import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPromosComponent } from './banner-promos.component';

describe('BannerPromosComponent', () => {
  let component: BannerPromosComponent;
  let fixture: ComponentFixture<BannerPromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPromosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
