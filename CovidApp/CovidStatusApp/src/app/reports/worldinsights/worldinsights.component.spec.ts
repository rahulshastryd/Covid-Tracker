import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldinsightsComponent } from './worldinsights.component';

describe('WorldinsightsComponent', () => {
  let component: WorldinsightsComponent;
  let fixture: ComponentFixture<WorldinsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldinsightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldinsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
