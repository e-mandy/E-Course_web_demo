import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContent2 } from './footer-content2';

describe('FooterContent2', () => {
  let component: FooterContent2;
  let fixture: ComponentFixture<FooterContent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterContent2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterContent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
