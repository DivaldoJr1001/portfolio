import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.scss']
})
export class NavFooterComponent {
  @Input() returnUrl: string = './../main';

  @Input() previousButton?: { localizedText: string, url: string };
  @Input() nextButton?: { localizedText: string, url: string };
}
