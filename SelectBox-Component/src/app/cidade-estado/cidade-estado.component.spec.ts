import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeEstadoComponent } from './cidade-estado.component';

describe('CidadeEstadoComponent', () => {
  let component: CidadeEstadoComponent;
  let fixture: ComponentFixture<CidadeEstadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CidadeEstadoComponent]
    });
    fixture = TestBed.createComponent(CidadeEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
