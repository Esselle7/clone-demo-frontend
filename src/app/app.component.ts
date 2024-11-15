import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UploadVideoComponent } from './upload-video/upload-video.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UploadVideoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clone-demo-ui';
}
