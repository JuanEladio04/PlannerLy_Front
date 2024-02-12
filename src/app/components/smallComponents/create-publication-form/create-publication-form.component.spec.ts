import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePublicationFormComponent } from './create-publication-form.component';

describe('CreatePublicationFormComponent', () => {
  let component: CreatePublicationFormComponent;
  let fixture: ComponentFixture<CreatePublicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePublicationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePublicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
