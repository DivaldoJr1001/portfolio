import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Paths } from 'src/app/app-routing.module';
import { HistoryPageComponent } from 'src/app/shared/abstract-sources/history-page.component';

@Component({
  selector: 'app-complementary-education',
  templateUrl: './complementary-education.component.html',
  styleUrls: ['./complementary-education.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComplementaryEducationComponent extends HistoryPageComponent {
  paths = Paths;

  ComplementaryEducation: Record<never, AcademicItemObject>[] = [
    {
      'pt-BR': {
        title: 'Cybersecurity Fundamentals ',
        institute: 'IBM-SkillsBuild',
        instituteURL: 'https://skillsbuild.org/',
        description: 'Compreensão básica dos conceitos, objetivos e práticas de segurança cibernética. Isso inclui grupos de ameaças cibernéticas, tipos de ataques, engenharia social, estudos de caso, estratégias gerais de segurança, criptografia e abordagens comuns que as organizações adotam para prevenir, detectar e responder a ataques cibernéticos.',
        startDate: 'Junho/2023',
        credential: 'https://www.credly.com/badges/0ecddac0-6e45-4b64-bdcc-932fb3176805/public_url',
        hours: 6
      },
      'en-US': {
        title: 'Cybersecurity Fundamentals ',
        institute: 'IBM-SkillsBuild',
        instituteURL: 'https://skillsbuild.org/',
        description: 'Foundational understanding of cybersecurity concepts, objectives, and practices. This includes cyber threat groups, types of attacks, social engineering, case studies, overall security strategies, cryptography, and common approaches that organizations take to prevent, detect, and respond to cyber attacks.',
        startDate: 'June/2023',
        credential: 'https://www.credly.com/badges/0ecddac0-6e45-4b64-bdcc-932fb3176805/public_url',
        hours: 6
      }
    },
    {
      'pt-BR': {
        title: 'Agile Explorer',
        institute: 'IBM-SkillsBuild',
        instituteURL: 'https://skillsbuild.org/',
        description: 'Compreensão fundamental dos valores, princípios e práticas Ágeis que ajudam a mudar a cultura e os comportamentos na maneira como as pessoas trabalham, permitindo que o indivíduo inicie uma conversa Ágil com membros da equipe e colegas e aplique o método Ágil às operações e programas em que trabalham em um ambiente familiar, acadêmico ou profissional.',
        startDate: 'Junho/2021',
        credential: 'https://www.credly.com/badges/33728e46-7fdb-4e92-9b9e-50fcf6b22720/public_url',
        hours: 7
      },
      'en-US': {
        title: 'Agile Explorer',
        institute: 'IBM-SkillsBuild',
        instituteURL: 'https://skillsbuild.org/',
        description: 'Foundational understanding of the Agile values, principles, and practices that help change culture and behaviors in the way that people work, allowing the individual to initiate an Agile conversation with team members and colleagues, and apply the Agile method to the operations and programs work they do in a family, academic, or work environment.',
        startDate: 'June/2021',
        credential: 'https://www.credly.com/badges/33728e46-7fdb-4e92-9b9e-50fcf6b22720/public_url',
        hours: 7
      }
    },
    {
      'pt-BR': {
        title: 'Conceitos e Fundamentos: Lógica de Programação, Orientação a Objetos, Swift, JavaScript e RESTful API',
        institute: 'HackaTruck MakerSpace',
        instituteURL: 'https://hackatruck.com.br/',
        description: 'Curso voltado ao ensino de fundamentos de desenvolvimento de aplicativos iOS, requerindo o desenvolvimento de um aplicativo por meio de Xcode para conclusão.',
        startDate: 'Março/2019',
        endDate: 'Abril/2019',
        credential: 'https://imgur.com/a/vCamw5h',
        hours: 65
      },
      'en-US': {
        title: 'Concepts and Fundamentals: Programming Logic, Object-Oriented Programming, Swift, JavaScript and RESTful API',
        institute: 'HackaTruck MakerSpace',
        instituteURL: 'https://hackatruck.com.br/',
        description: 'Course aimed at teaching the fundamentals of iOS application development, requiring the development of an application through Xcode for completion.',
        startDate: 'March/2019',
        endDate: 'April/2019',
        credential: 'https://imgur.com/a/vCamw5h',
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
  present?: boolean,
  hours?: number,
  credential?: string
}
