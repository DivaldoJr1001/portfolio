import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs';
import { envVariables } from 'src/environment/environment';
import { fadeAnimation } from './shared/constants/animations';
import { DestroyEventNoticeComponent } from './shared/extensions/destroy-event-notice.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent extends DestroyEventNoticeComponent implements OnInit {
  title = 'portfolio'

  loadingRouteConfig: boolean = false;

  constructor(
    protected translate: TranslateService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {
    translate.addLangs(['pt-BR', 'en-US']);
    super();
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.loadingRouteConfig = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        setTimeout((_: any) => {
          this.loadingRouteConfig = false;
          this.cd.detectChanges();
        }, 500);
      }
    });

    this.router.events.pipe(takeUntil(this._onDestroy)).subscribe({
      next: (event) => {
        if (event instanceof NavigationEnd) {
          const availableLanguages = this.translate.getLangs();

          const language = this.activatedRoute.snapshot.queryParamMap.get('l') || '';

          if (!availableLanguages.includes(language)) {
            this.translate.use(this.translate.defaultLang);
          } else if (language !== this.translate.currentLang) {
            this.translate.use(language);
          }
        }
      }
    });

    this.translate.onLangChange.pipe(takeUntil(this._onDestroy)).subscribe({
      next: langObj => {
        const urlParts = this.router.url.split('?l=');

        const newUrl = urlParts[0] + `?l=${langObj.lang}`;
        this.router.navigateByUrl(newUrl);
      }
    });
  }

  openGithub(): void {
    const link = envVariables.githubLink;
    window.open(link, "_blank");
  }

  openLinkedIn(): void {
    const link = envVariables.linkedInLink;
    window.open(link, "_blank");
  }
}
