import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitaddComponent } from './produitadd.component';

describe('ProduitaddComponent', () => {
  let component: ProduitaddComponent;
  let fixture: ComponentFixture<ProduitaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
