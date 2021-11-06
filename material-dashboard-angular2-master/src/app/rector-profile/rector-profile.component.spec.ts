import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectorProfileComponent } from './rector-profile.component';

describe('RectorProfileComponent', () => {
  let component: RectorProfileComponent;
  let fixture: ComponentFixture<RectorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectorProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RectorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
