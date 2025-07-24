import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContent3 } from './footer-content3';

describe('FooterContent3', () => {
  let component: FooterContent3;
  let fixture: ComponentFixture<FooterContent3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterContent3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterContent3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
