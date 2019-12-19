import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyCardCounterComponent } from './family-card-counter.component';

describe('FamilyCardCounterComponent', () => {
  let component: FamilyCardCounterComponent;
  let fixture: ComponentFixture<FamilyCardCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyCardCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyCardCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
