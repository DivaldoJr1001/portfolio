import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent {
  @Input() localizationString = '';
  @Input() routerUrl = '';
  @Input() disableRouting = false;

  @Input() matIconBefore = '';
  @Input() matIconAfter = '';
}
