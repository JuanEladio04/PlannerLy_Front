import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWorkSpaceModalComponent } from './delete-work-space-modal.component';

describe('DeleteWorkSpaceModalComponent', () => {
  let component: DeleteWorkSpaceModalComponent;
  let fixture: ComponentFixture<DeleteWorkSpaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteWorkSpaceModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteWorkSpaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
