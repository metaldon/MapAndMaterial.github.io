import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitmodComponent } from './produitmod.component';

describe('ProduitmodComponent', () => {
  let component: ProduitmodComponent;
  let fixture: ComponentFixture<ProduitmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitmodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
