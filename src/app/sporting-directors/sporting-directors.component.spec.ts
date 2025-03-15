import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportingDirectorsComponent } from './sporting-directors.component';

describe('SportingDirectorsComponent', () => {
  let component: SportingDirectorsComponent;
  let fixture: ComponentFixture<SportingDirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportingDirectorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportingDirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
