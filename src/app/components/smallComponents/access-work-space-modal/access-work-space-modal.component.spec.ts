import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessWorkSpaceModalComponent } from './access-work-space-modal.component';

describe('AccessWorkSpaceModalComponent', () => {
  let component: AccessWorkSpaceModalComponent;
  let fixture: ComponentFixture<AccessWorkSpaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessWorkSpaceModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessWorkSpaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
