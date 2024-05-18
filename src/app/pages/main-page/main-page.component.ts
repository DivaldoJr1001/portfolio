import { Component } from '@angular/core';
import { sharedStringsBR, sharedStringsUS } from 'src/app/shared/constants/shared-strings';
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
    info2: 'Bacharel em Ciência da Computação | Cursando MBA em Ciência de Dados',
    location: 'Fortaleza, Ceará, Brasil',
    summary: 'Como profissional, meu objetivo é interagir com uma grande variedade de tecnologias e ferramentas de forma a seguir a curva de avanços tecnológicos, sempre buscando novas técnicas para aprimorar minha eficiência na efetuação das mais variadas atividades.',
    experience: sharedStringsBR['experience'],
    academicHistory: sharedStringsBR['academicHistory'],
    skills: sharedStringsBR['skills']
  };

  override stringsUS: Record<string, string> = {
    footer: `Portfolio in Angular`,
    info1: `Full Stack Developer since 2019`,
    info2: 'Bachelor of Computer Science | Pursuing an MBA in Data Science',
    location: 'Fortaleza, Ceará, Brazil',
    summary: 'As a professional, my objective is to interact with a wide variety of technologies and tools in order to follow the curve of technological improvements, always searching for new techniques to improve my efficiency in carrying out the most varied tasks.',
    experience: sharedStringsUS['experience'],
    academicHistory: sharedStringsUS['academicHistory'],
    skills: sharedStringsUS['skills']
  };

  constructor() {
    super();
  }
}
