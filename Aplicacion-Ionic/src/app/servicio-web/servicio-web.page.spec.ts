import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicioWebPage } from './servicio-web.page';

describe('ServicioWebPage', () => {
  let component: ServicioWebPage;
  let fixture: ComponentFixture<ServicioWebPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ServicioWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
