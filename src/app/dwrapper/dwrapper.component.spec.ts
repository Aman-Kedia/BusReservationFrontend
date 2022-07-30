import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwrapperComponent } from './dwrapper.component';

describe('DwrapperComponent', () => {
  let component: DwrapperComponent;
  let fixture: ComponentFixture<DwrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
