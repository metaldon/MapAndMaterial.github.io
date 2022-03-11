import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsAddComponent } from './produits-add.component';

describe('ProduitsAddComponent', () => {
  let component: ProduitsAddComponent;
  let fixture: ComponentFixture<ProduitsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
