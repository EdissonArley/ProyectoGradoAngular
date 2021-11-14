import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretariaProfileComponent } from './secretaria-profile.component';

describe('SecretariaProfileComponent', () => {
  let component: SecretariaProfileComponent;
  let fixture: ComponentFixture<SecretariaProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretariaProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretariaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
