import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyCardAdultsComponent } from './family-card-adults.component';

describe('FamilyCardAdultsComponent', () => {
  let component: FamilyCardAdultsComponent;
  let fixture: ComponentFixture<FamilyCardAdultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyCardAdultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyCardAdultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
