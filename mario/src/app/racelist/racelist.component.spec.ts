import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacelistComponent } from './racelist.component';

describe('RacelistComponent', () => {
  let component: RacelistComponent;
  let fixture: ComponentFixture<RacelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
