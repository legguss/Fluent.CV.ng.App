import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLineSubComponent } from './profile-line-sub.component';

describe('ProfileLineSubComponent', () => {
  let component: ProfileLineSubComponent;
  let fixture: ComponentFixture<ProfileLineSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ProfileLineSubComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ProfileLineSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
