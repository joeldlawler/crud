import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphQLformComponent } from './graph-qlform.component';

describe('GraphQLformComponent', () => {
  let component: GraphQLformComponent;
  let fixture: ComponentFixture<GraphQLformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphQLformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphQLformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
