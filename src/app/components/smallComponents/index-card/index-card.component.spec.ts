import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCardComponent } from './index-card.component';

describe('IndexCardComponent', () => {
  let component: IndexCardComponent;
  let fixture: ComponentFixture<IndexCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
