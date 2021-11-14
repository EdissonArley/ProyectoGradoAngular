import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretariaFormsComponent } from './secretaria-forms.component';

describe('SecretariaFormsComponent', () => {
  let component: SecretariaFormsComponent;
  let fixture: ComponentFixture<SecretariaFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretariaFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretariaFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
