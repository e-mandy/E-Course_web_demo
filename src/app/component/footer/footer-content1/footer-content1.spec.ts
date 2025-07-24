import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContent1 } from './footer-content1';

describe('FooterContent1', () => {
  let component: FooterContent1;
  let fixture: ComponentFixture<FooterContent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterContent1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterContent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
