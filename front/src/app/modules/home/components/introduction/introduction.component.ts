import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
})
export class IntroductionComponent implements AfterViewInit {
  @ViewChild('videoElement', { static: false }) videoElement!: ElementRef;

  ngAfterViewInit() {
    const video = this.videoElement.nativeElement;
    video.muted = true;
    video.play();
  }
}
