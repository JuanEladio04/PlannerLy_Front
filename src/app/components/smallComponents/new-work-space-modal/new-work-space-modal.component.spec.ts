import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkSpaceModalComponent } from './new-work-space-modal.component';

describe('NewWorkSpaceModalComponent', () => {
  let component: NewWorkSpaceModalComponent;
  let fixture: ComponentFixture<NewWorkSpaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewWorkSpaceModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewWorkSpaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
