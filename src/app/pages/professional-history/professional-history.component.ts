import { Component } from '@angular/core';
import { sharedStringsBR, sharedStringsUS } from 'src/app/shared/constants/shared-strings';
import { MultiLanguagePageComponent } from 'src/app/shared/extensions/multi-language-page.component';
import { Languages } from 'src/services/language.service';

@Component({
  selector: 'app-professional-history',
  templateUrl: './professional-history.component.html',
  styleUrls: ['./professional-history.component.scss']
})
export class ProfessionalHistoryComponent extends MultiLanguagePageComponent {
  override stringsBR: Record<string, string> = {
    title: sharedStringsBR['experience'],
    present: 'Presente',
    return: sharedStringsBR['return']
  };

  override stringsUS: Record<string, string> = {
    title: sharedStringsUS['experience'],
    present: 'Present',
    return: sharedStringsUS['return']
  };

  workHistory: Record<any, WorkItemObject>[] = [
    {
      [Languages.PT]: {
        title: 'Desenvolvedor Web Full Stack Freelance',
        company: 'Azulejus',
        startDate: 'Julho/2023',
        description: 'Desenvolvimento e manutenção de uma aplicação web de gerenciamento de vendas, clientes, e estoque utilizando as tecnologias Angular, NestJS, Mongoose e MongoDB.'
      },
      [Languages.EN]: {
        title: 'Full Stack Freelance Web Developer',
        company: 'Azulejus',
        startDate: 'July/2023',
        description: 'Development and maintenance of a web application for managing sales, customers, and inventory using Angular, NestJS, Mongoose, and MongoDB.'
      }
    },
    {
      [Languages.PT]: {
        title: 'Desenvolvedor Web Front-End',
        company: 'Pathfind',
        startDate: 'Julho/2019',
        endDate: 'Abril/2023',
        description: 'Desenvolvimento front-end de uma aplicação web desktop utilizando Angular, incluindo criação de telas seguindo designs web pré-definidos, conexão de front-end e endpoints API no back-end, implementação de funcionalidades para a formatação e utilização de dados recebidos dos endpoints, e geração de testes unitários.'
      },
      [Languages.EN]: {
        title: 'Front-End Web Developer',
        company: 'Pathfind',
        startDate: 'July/2019',
        endDate: 'April/2023',
        description: 'Front-end development of a desktop web application using Angular, including creating screens following pre-defined web designs, connecting front-end to API endpoints in the back-end, implementing functionalities for formatting and utilizing data received from endpoints, and creation of unit tests.'
      },
    },
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