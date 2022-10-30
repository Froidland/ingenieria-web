import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAlimentosComponent } from './menu-alimentos.component';

describe('MenuAlimentosComponent', () => {
  let component: MenuAlimentosComponent;
  let fixture: ComponentFixture<MenuAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAlimentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
