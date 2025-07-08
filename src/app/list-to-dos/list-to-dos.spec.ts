import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListToDos } from './list-to-dos';

describe('ListToDos', () => {
  let component: ListToDos;
  let fixture: ComponentFixture<ListToDos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListToDos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListToDos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
