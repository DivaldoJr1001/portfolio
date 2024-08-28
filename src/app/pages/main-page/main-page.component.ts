import { Component } from '@angular/core';
import { ScreenSizeService } from 'src/services/screen-size.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor(
    protected screenSizeService: ScreenSizeService
  ) {}
}
