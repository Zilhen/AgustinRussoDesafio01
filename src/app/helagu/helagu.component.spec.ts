import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelaguComponent } from './helagu.component';

describe('HelaguComponent', () => {
  let component: HelaguComponent;
  let fixture: ComponentFixture<HelaguComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelaguComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelaguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
