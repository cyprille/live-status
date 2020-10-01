import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerItemStatusComponent } from './server-item-status.component';

describe('ServerItemStatusComponent', () => {
  let component: ServerItemStatusComponent;
  let fixture: ComponentFixture<ServerItemStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerItemStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerItemStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
