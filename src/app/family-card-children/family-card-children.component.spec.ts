import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyCardChildrenComponent } from './family-card-children.component';

describe('FamilyCardChildrenComponent', () => {
  let component: FamilyCardChildrenComponent;
  let fixture: ComponentFixture<FamilyCardChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyCardChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyCardChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
