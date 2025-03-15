import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutsComponent } from './scouts.component';

describe('ScoutsComponent', () => {
  let component: ScoutsComponent;
  let fixture: ComponentFixture<ScoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
