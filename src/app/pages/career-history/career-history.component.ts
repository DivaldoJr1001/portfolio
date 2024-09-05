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
        title: 'Desenvolvedor Web Full Stack Freelance',
        company: 'Azulejus',
        companyURL: 'https://azulejus.pt/',
        startDate: 'Julho/2023',
        description: 'Desenvolvimento e manutenção de uma aplicação web de gerenciamento de vendas, clientes, e estoque utilizando as tecnologias Angular, NestJS, Mongoose e MongoDB.'
      },
      'en-US': {
        title: 'Freelance Full Stack Web Developer',
        company: 'Azulejus',
        companyURL: 'https://azulejus.pt/',
        startDate: 'July/2023',
        description: 'Development and maintenance of a web application for managing sales, customers, and inventory using Angular, NestJS, Mongoose, and MongoDB.'
      }
    },
    {
      'pt-BR': {
        title: 'Desenvolvedor Web Front-End',
        company: 'Pathfind',
        companyURL: 'https://www.pathfind.com.br/',
        startDate: 'Julho/2019',
        endDate: 'Abril/2023',
        description: 'Desenvolvimento front-end de uma aplicação web desktop utilizando Angular, incluindo criação de telas seguindo designs web pré-definidos, conexão de front-end e endpoints API no back-end, implementação de funcionalidades para a formatação e utilização de dados recebidos dos endpoints, e geração de testes unitários.'
      },
      'en-US': {
        title: 'Front-End Web Developer',
        company: 'Pathfind',
        companyURL: 'https://www.pathfind.com.br/',
        startDate: 'July/2019',
        endDate: 'April/2023',
        description: 'Front-end development of a desktop web application using Angular, including creating screens following pre-defined web designs, connecting front-end to API endpoints in the back-end, implementing functionalities for formatting and utilizing data received from endpoints, and creation of unit tests.'
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
