import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviselistComponent } from './deviselist.component';

describe('DeviselistComponent', () => {
  let component: DeviselistComponent;
  let fixture: ComponentFixture<DeviselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviselistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
