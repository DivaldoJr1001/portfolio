import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Paths } from 'src/app/app-routing.module';
import { HistoryPageComponent } from 'src/app/shared/abstract-sources/history-page.component';

@Component({
  selector: 'app-career-history',
  templateUrl: './career-history.component.html',
  styleUrls: ['./career-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareerHistoryComponent extends HistoryPageComponent {
  paths = Paths;

  workHistory: Record<string, WorkItemObject>[] = [
    {
      'pt-BR': {
        title: 'Estagiário de Dados',
        company: 'StarPrint',
        companyURL: 'https://www.starprinton.com.br/',
        startDate: 'Outubro/2024',
        description: 'Análise, inserção, formatação e organização de dados operacionais do negócio, além de manutenção e melhorias de processos relacionados.'
      },
      'en-US': {
        title: 'Data Intern',
        company: 'StarPrint',
        companyURL: 'https://www.starprinton.com.br/',
        startDate: 'October/2024',
        description: 'Analysis, insertion, formatting and organization of business operational data, as well as maintenance and improvements of related processes.'
      }
    },
    {
      'pt-BR': {
        title: 'Desenvolvedor Web Full Stack Freelance',
        company: 'Azulejus',
        companyURL: 'https://azulejus.pt/',
        startDate: 'Julho/2023',
        endDate: 'Setembro/2024',
        description: 'Desenvolvi e mantive uma aplicação web de gerenciamento de vendas, clientes e estoque, utilizando Angular, NestJS, Mongoose e MongoDB, o que resultou em uma melhoria significante na eficiência operacional do negócio.'
      },
      'en-US': {
        title: 'Freelance Full Stack Web Developer',
        company: 'Azulejus',
        companyURL: 'https://azulejus.pt/',
        startDate: 'July/2023',
        endDate: 'September/2024',
        description: 'Developed and maintained a web application for managing sales, customers, and inventory, using Angular, NestJS, Mongoose, and MongoDB, resulting in a significant improvement in operational efficiency.'
      }
    },
    {
      'pt-BR': {
        title: 'Desenvolvedor Web Front-End',
        company: 'Pathfind',
        companyURL: 'https://www.pathfind.com.br/',
        startDate: 'Julho/2019',
        endDate: 'Abril/2023',
        description: 'Conduzi o desenvolvimento front-end de uma aplicação web desktop em Angular, criando interfaces de usuário seguindo estritamente os designs pré-definidos. Colaborei na integração do front-end com APIs back-end e implementei testes unitários que aumentaram a estabilidade e confiabilidade do sistema.'
      },
      'en-US': {
        title: 'Front-End Web Developer',
        company: 'Pathfind',
        companyURL: 'https://www.pathfind.com.br/',
        startDate: 'July/2019',
        endDate: 'April/2023',
        description: 'Led the front-end development of a desktop web application using Angular, creating user interfaces that strictly followed predefined designs. Collaborated on the integration of front-end with back-end APIs and implemented unit tests that enhanced the stability and reliability of the system.'
      }
    }
  ];
}

interface WorkItemObject {
  title: string,
  company: string,
  companyURL?: string,
  startDate: string,
  endDate?: string,
  description: string
}
