import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBody2 } from './content-body2';

describe('ContentBody2', () => {
  let component: ContentBody2;
  let fixture: ComponentFixture<ContentBody2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentBody2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBody2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
