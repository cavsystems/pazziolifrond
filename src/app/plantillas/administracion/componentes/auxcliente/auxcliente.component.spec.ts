import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxclienteComponent } from './auxcliente.component';

describe('AuxclienteComponent', () => {
  let component: AuxclienteComponent;
  let fixture: ComponentFixture<AuxclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuxclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuxclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
