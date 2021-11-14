import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectorFormsComponent } from './rector-forms.component';

describe('RectorFormsComponent', () => {
  let component: RectorFormsComponent;
  let fixture: ComponentFixture<RectorFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectorFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RectorFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
