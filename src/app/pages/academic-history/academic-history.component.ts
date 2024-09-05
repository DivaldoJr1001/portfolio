import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Paths } from 'src/app/app-routing.module';
import { HistoryPageComponent } from 'src/app/shared/abstract-sources/history-page.component';

@Component({
  selector: 'app-academic-history',
  templateUrl: './academic-history.component.html',
  styleUrls: ['./academic-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcademicHistoryComponent extends HistoryPageComponent {
  paths = Paths;

  academicHistory: Record<string, AcademicItemObject>[] = [
    {
      'pt-BR': {
        title: 'MBA em Ciência de Dados',
        institute: 'Universidade de Fortaleza',
        instituteURL: 'https://unifor.br/',
        description: 'Curso para formação de profissionais qualificados para realizar projetos de desenvolvimento e administração de soluções de Ciências de Dados trabalhando com tecnologias que permitam operar grandes volumes de dados processados.',
        startDate: 'Abril/2024',
        endDate: 'Fevereiro/2026 (Cursando)'
      },
      'en-US': {
        title: 'MBA in Data Science',
        institute: 'University of Fortaleza',
        instituteURL: 'https://unifor.br/',
        description: 'Course to train qualified professionals to carry out projects to develop and manage Data Science solutions, working with technologies that allow the operation of large volumes of processed data.',
        startDate: 'April/2024',
        endDate: 'February/2026 (In progress)'
      }
    },
    {
      'pt-BR': {
        title: 'Bacharelado em Ciência da Computação ',
        institute: 'Universidade de Fortaleza',
        instituteURL: 'https://unifor.br/',
        description: 'Curso voltado ao aprendizado de ferramentas de infraestrutura de software, sistemas de computação, métodos, teorias, linguagens e modelos, além de resolução de problemas que tenham solução algorítmica e desenvolvimento de sistemas e projetos de qualquer natureza computacional com equipes de diferentes perfis.',
        startDate: 'Janeiro/2019',
        endDate: 'Dezembro/2023',
        credential: 'https://imgur.com/a/MweFo8c'
      },
      'en-US': {
        title: 'Bachelor in Computer Science ',
        institute: 'University of Fortaleza',
        instituteURL: 'https://unifor.br/',
        description: 'Course aimed at learning about software infrastructure tools, computer systems, methods, theories, languages and models, as well as solving problems with algorithmic solutions and developing systems and projects of any computational nature with teams of different profiles.',
        startDate: 'January/2019',
        endDate: 'December/2023',
        credential: 'https://imgur.com/a/MweFo8c'
      }
    }
  ];
}

interface AcademicItemObject {
  title: string,
  institute: string,
  instituteURL?: string,
  description?: string,
  startDate: string,
  endDate?: string,
  credential?: string
}
