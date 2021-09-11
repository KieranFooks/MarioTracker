import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareboardComponent } from './compareboard.component';

describe('CompareboardComponent', () => {
  let component: CompareboardComponent;
  let fixture: ComponentFixture<CompareboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
