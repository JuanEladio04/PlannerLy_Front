import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationContainerComponent } from './publication-container.component';

describe('PublicationContainerComponent', () => {
  let component: PublicationContainerComponent;
  let fixture: ComponentFixture<PublicationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicationContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
