import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareresultComponent } from './compareresult.component';

describe('CompareresultComponent', () => {
  let component: CompareresultComponent;
  let fixture: ComponentFixture<CompareresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
