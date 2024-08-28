import { Component, Input } from '@angular/core';
import { ScreenSizeService } from 'src/services/screen-size.service';

@Component({
  selector: 'app-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.scss']
})
export class NavFooterComponent {
  @Input() returnUrl = './../main';

  @Input() previousButton?: { localizedText: string, url: string };
  @Input() nextButton?: { localizedText: string, url: string };

  @Input() compactModeWidthThreshold = 0;

  constructor(
    protected screenSizeService: ScreenSizeService
  ) {}
}
