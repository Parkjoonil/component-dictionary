import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsYoutubeComponent } from './channels-youtube.component';

describe('ChannelsYoutubeComponent', () => {
  let component: ChannelsYoutubeComponent;
  let fixture: ComponentFixture<ChannelsYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelsYoutubeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelsYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
