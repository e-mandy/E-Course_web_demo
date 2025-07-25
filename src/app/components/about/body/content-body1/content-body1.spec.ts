import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBody1 } from './content-body1';

describe('ContentBody1', () => {
  let component: ContentBody1;
  let fixture: ComponentFixture<ContentBody1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentBody1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBody1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
