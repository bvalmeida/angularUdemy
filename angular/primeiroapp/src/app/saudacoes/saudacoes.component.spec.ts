import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudacoesComponent } from './saudacoes.component';

describe('SaudacoesComponent', () => {
  let component: SaudacoesComponent;
  let fixture: ComponentFixture<SaudacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaudacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaudacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
