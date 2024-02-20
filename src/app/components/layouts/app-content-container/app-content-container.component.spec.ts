import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContentContainerComponent } from './app-content-container.component';

describe('AppContentContainerComponent', () => {
  let component: AppContentContainerComponent;
  let fixture: ComponentFixture<AppContentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppContentContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
