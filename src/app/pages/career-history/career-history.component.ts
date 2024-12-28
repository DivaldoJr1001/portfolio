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
        description: 'Realizo análises e organização de dados operacionais do negócio, garantindo precisão e consistência nas informações. Sou responsável por inserir, formatar e estruturar dados, além de identificar e implementar melhorias em processos operacionais, contribuindo para a eficiência e tomada de decisão da empresa.'
      },
      'en-US': {
        title: 'Data Intern',
        company: 'StarPrint',
        companyURL: 'https://www.starprinton.com.br/',
        startDate: 'October/2024',
        description: 'I perform analysis and organization of operational business data, ensuring accuracy and consistency of information. I am responsible for inserting, formatting, and structuring data, as well as identifying and implementing improvements in operational processes, contributing to the company\'s efficiency and decision-making.'
      }
    },
    {
      'pt-BR': {
        title: 'Desenvolvedor Web Full Stack Freelance',
        company: 'Azulejus',
        companyURL: 'https://azulejus.pt/',
        startDate: 'Julho/2023',
        endDate: 'Setembro/2024',
        description: 'Desenvolvi e mantive uma aplicação web para gerenciamento de vendas, clientes e estoque, utilizando Angular, NestJS, Mongoose e MongoDB. A solução implementada otimizou significativamente a eficiência operacional do negócio, garantindo um fluxo de trabalho mais ágil e confiável.'
      },
      'en-US': {
        title: 'Freelance Full Stack Web Developer',
        company: 'Azulejus',
        companyURL: 'https://azulejus.pt/',
        startDate: 'July/2023',
        endDate: 'September/2024',
        description: 'Developed and maintained a web application for managing sales, customers, and inventory, leveraging Angular, NestJS, Mongoose, and MongoDB. The implemented solution significantly optimized the business\'s operational efficiency, ensuring a more agile and reliable workflow.'
      }
    },
    {
      'pt-BR': {
        title: 'Desenvolvedor Web Front-End',
        company: 'Pathfind',
        companyURL: 'https://www.pathfind.com.br/',
        startDate: 'Julho/2019',
        endDate: 'Abril/2023',
        description: 'Liderei o desenvolvimento front-end de uma aplicação web desktop em Angular, projetando interfaces de usuário que seguiam rigorosamente os designs pré-definidos. Colaborei na integração com APIs back-end e implementei testes unitários que aprimoraram a estabilidade e a confiabilidade do sistema.'
      },
      'en-US': {
        title: 'Front-End Web Developer',
        company: 'Pathfind',
        companyURL: 'https://www.pathfind.com.br/',
        startDate: 'July/2019',
        endDate: 'April/2023',
        description: 'Led the front-end development of a desktop web application using Angular, designing user interfaces that strictly adhered to predefined designs. Collaborated on API integrations and implemented unit tests, enhancing the system\'s stability and reliability.'
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
