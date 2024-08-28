import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent {
  @Input() localizationString: string | undefined = '';
  @Input() routerUrl = '';
  @Input() disableRouting = false;

  @Input() matIconCenter: string | undefined = '';
  @Input() matIconBefore: string | undefined = '';
  @Input() matIconAfter: string | undefined = '';
}
