import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySpaceToolBarComponent } from './my-space-tool-bar.component';

describe('MySpaceToolBarComponent', () => {
  let component: MySpaceToolBarComponent;
  let fixture: ComponentFixture<MySpaceToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MySpaceToolBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySpaceToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
