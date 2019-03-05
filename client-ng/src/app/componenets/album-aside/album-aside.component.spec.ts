import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumAsideComponent } from './album-aside.component';

describe('AlbumAsideComponent', () => {
  let component: AlbumAsideComponent;
  let fixture: ComponentFixture<AlbumAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
