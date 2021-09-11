import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceboardComponent } from './raceboard.component';

describe('RaceboardComponent', () => {
  let component: RaceboardComponent;
  let fixture: ComponentFixture<RaceboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
