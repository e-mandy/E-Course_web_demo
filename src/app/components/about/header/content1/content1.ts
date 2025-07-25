import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-content1',
  standalone: true,
  imports: [NgIf],
  templateUrl: './content1.html',
  styleUrl: './content1.css'
})
export class Content1 {
  videoPlaying = false;

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  playVideo() {
    this.videoPlaying = true;
    setTimeout(() => {
      if (this.videoPlayer?.nativeElement) {
        this.videoPlayer.nativeElement.muted = false; // Assure que le son est activé
        this.videoPlayer.nativeElement.play();
      }
    }, 0);
  }
}
