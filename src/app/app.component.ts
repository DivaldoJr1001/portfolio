import { Component } from '@angular/core';
import { envVariables } from 'src/environment/environment';
import { fadeAnimation } from './shared/constants/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'portfolio'

  openGithub(): void {
    const link = envVariables.githubLink;
    window.open(link, "_blank");
  }

  openLinkedIn(): void {
    const link = envVariables.linkedInLink;
    window.open(link, "_blank");
  }
}
