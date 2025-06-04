import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibodecajaComponent } from './recibodecaja.component';

describe('RecibodecajaComponent', () => {
  let component: RecibodecajaComponent;
  let fixture: ComponentFixture<RecibodecajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibodecajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecibodecajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
