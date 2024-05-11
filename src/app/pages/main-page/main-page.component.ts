import { Component } from '@angular/core';
import { MultiLanguagePageComponent } from 'src/app/shared/extensions/multi-language-page.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent extends MultiLanguagePageComponent {
  name = 'Divaldo Aderaldo de Oliveira Júnior';

  override stringsBR: Record<string, string> = {
    footer: `Portfólio em Angular`,
    info1: `Desenvolvedor Full Stack desde 2019`,
    info2: 'Bacharel em Ciência da Computação | Cursando MBA em Ciência de Dados'
  };

  override stringsUS: Record<string, string> = {
    footer: `Portfolio in Angular`,
    info1: `Full Stack Developer since 2019`,
    info2: 'Bachelor in Data Science | MBA in Data Science in progress'
  };

  constructor() {
    super();
  }
}
