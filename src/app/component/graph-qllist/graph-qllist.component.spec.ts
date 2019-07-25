import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphQLlistComponent } from './graph-qllist.component';

describe('GraphQLlistComponent', () => {
  let component: GraphQLlistComponent;
  let fixture: ComponentFixture<GraphQLlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphQLlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphQLlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
