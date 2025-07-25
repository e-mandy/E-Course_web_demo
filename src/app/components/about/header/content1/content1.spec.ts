import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Content1 } from './content1';

describe('Content1', () => {
  let component: Content1;
  let fixture: ComponentFixture<Content1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Content1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Content1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
