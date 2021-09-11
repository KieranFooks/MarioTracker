import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainengineComponent } from './mainengine.component';

describe('MainengineComponent', () => {
  let component: MainengineComponent;
  let fixture: ComponentFixture<MainengineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainengineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainengineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
