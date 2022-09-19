import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TOOLBARComponent } from './toolbar.component';

describe('TOOLBARComponent', () => {
  let component: TOOLBARComponent;
  let fixture: ComponentFixture<TOOLBARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TOOLBARComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TOOLBARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
