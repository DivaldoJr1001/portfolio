import { Component } from '@angular/core';
import { fadeAnimation } from './shared/constants/animations';
import { MultiLanguagePageComponent } from './shared/extensions/multi-language-page.component';
import { envVariables } from 'src/environment/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent extends MultiLanguagePageComponent {
  title = 'portfolio';

  override stringsBR: Record<string, string> = {
    footer: `Portfólio em Angular`
  };

  override stringsUS: Record<string, string> = {
    footer: `Portfolio in Angular`
  };

  openGithub(): void {
    const link = envVariables.githubLink;
    window.open(link, "_blank");
  }

  openLinkedIn(): void {
    const link = envVariables.linkedInLink;
    window.open(link, "_blank");
  }
}
