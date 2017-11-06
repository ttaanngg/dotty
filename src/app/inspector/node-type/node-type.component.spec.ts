import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeTypeComponent } from './node-type.component';

describe('NodeTypeComponent', () => {
  let component: NodeTypeComponent;
  let fixture: ComponentFixture<NodeTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
