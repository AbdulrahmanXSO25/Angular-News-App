import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyComponent } from './egy.component';

describe('EgyComponent', () => {
  let component: EgyComponent;
  let fixture: ComponentFixture<EgyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
