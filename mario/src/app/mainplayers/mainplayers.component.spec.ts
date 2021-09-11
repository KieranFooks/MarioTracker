import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainplayersComponent } from './mainplayers.component';

describe('MainplayersComponent', () => {
  let component: MainplayersComponent;
  let fixture: ComponentFixture<MainplayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainplayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
