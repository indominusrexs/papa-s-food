import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditproductoComponent } from './addeditproducto.component';

describe('AddeditproductoComponent', () => {
  let component: AddeditproductoComponent;
  let fixture: ComponentFixture<AddeditproductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddeditproductoComponent]
    });
    fixture = TestBed.createComponent(AddeditproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
