import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBildingComponent } from './event-bilding.component';

describe('EventBildingComponent', () => {
  let component: EventBildingComponent;
  let fixture: ComponentFixture<EventBildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBildingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventBildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
