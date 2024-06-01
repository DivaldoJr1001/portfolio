import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Paths } from 'src/app/app-routing.module';
import { HistoryPage } from 'src/app/shared/abstract-sources/history-page.component';

@Component({
  selector: 'app-complementary-education',
  templateUrl: './complementary-education.component.html',
  styleUrls: ['./complementary-education.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComplementaryEducationComponent extends HistoryPage {
  paths = Paths;

  ComplementaryEducation: Record<any, AcademicItemObject>[] = [
    {
      'pt-BR': {
        title: 'Conceitos e Fundamentos: Lógica de Programação, Orientação a Objetos, Swift, JavaScript e RESTful API',
        institute: 'HackaTruck MakerSpace',
        instituteURL: 'https://hackatruck.com.br/',
        description: 'Curso voltado ao ensino de fundamentos de desenvolvimento de aplicativos iOS, requerindo o desenvolvimento de um aplicativo por meio de Xcode para conclusão.',
        startDate: 'Março/2019',
        endDate: 'Abril/2019',
        certificate: 'https://imgur.com/a/vCamw5h',
        hours: 65
      },
      'en-US': {
        title: 'Concepts and Fundamentals: Programming Logic, Object-Oriented Programming, Swift, JavaScript and RESTful API',
        institute: 'HackaTruck MakerSpace',
        instituteURL: 'https://hackatruck.com.br/',
        description: 'Course aimed at teaching the fundamentals of iOS application development, requiring the development of an application through Xcode for completion.',
        startDate: 'March/2019',
        endDate: 'April/2019',
        certificate: 'https://imgur.com/a/vCamw5h',
        hours: 65
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
  hours?: number,
  certificate?: string
}
