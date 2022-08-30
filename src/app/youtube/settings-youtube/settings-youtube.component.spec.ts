import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsYoutubeComponent } from './settings-youtube.component';

describe('SettingsYoutubeComponent', () => {
  let component: SettingsYoutubeComponent;
  let fixture: ComponentFixture<SettingsYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsYoutubeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
