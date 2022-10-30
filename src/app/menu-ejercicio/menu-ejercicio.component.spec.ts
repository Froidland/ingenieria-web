import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEjercicioComponent } from './menu-ejercicio.component';

describe('MenuEjercicioComponent', () => {
  let component: MenuEjercicioComponent;
  let fixture: ComponentFixture<MenuEjercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEjercicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
