import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CurrentLanguageChecker } from 'src/app/shared/extensions/current-language-checker.component';

@Component({
  selector: 'app-career-history',
  templateUrl: './career-history.component.html',
  styleUrls: ['./career-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareerHistoryComponent extends CurrentLanguageChecker {
  workHistory: Record<any, WorkItemObject>[] = [
    {
      'pt-BR': {
        title: 'Desenvolvedor Web Full Stack Freelance',
        company: 'Azulejus',
        startDate: 'Julho/2023',
        description: 'Desenvolvimento e manutenção de uma aplicação web de gerenciamento de vendas, clientes, e estoque utilizando as tecnologias Angular, NestJS, Mongoose e MongoDB.'
      },
      'en-US': {
        title: 'Full Stack Freelance Web Developer',
        company: 'Azulejus',
        startDate: 'July/2023',
        description: 'Development and maintenance of a web application for managing sales, customers, and inventory using Angular, NestJS, Mongoose, and MongoDB.'
      }
    },
    {
      'pt-BR': {
        title: 'Desenvolvedor Web Front-End',
        company: 'Pathfind',
        startDate: 'Julho/2019',
        endDate: 'Abril/2023',
        description: 'Desenvolvimento front-end de uma aplicação web desktop utilizando Angular, incluindo criação de telas seguindo designs web pré-definidos, conexão de front-end e endpoints API no back-end, implementação de funcionalidades para a formatação e utilização de dados recebidos dos endpoints, e geração de testes unitários.'
      },
      'en-US': {
        title: 'Front-End Web Developer',
        company: 'Pathfind',
        startDate: 'July/2019',
        endDate: 'April/2023',
        description: 'Front-end development of a desktop web application using Angular, including creating screens following pre-defined web designs, connecting front-end to API endpoints in the back-end, implementing functionalities for formatting and utilizing data received from endpoints, and creation of unit tests.'
      }
    }
  ];

  openLink(link: string): void {
    if (link) {
      window.open(link, "_blank");
    }
  }
}

interface WorkItemObject {
  title: string,
  company: string,
  companyURL?: string,
  startDate: string,
  endDate?: string,
  description: string
}
