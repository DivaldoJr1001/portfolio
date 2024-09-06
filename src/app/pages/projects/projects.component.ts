import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Paths } from 'src/app/app-routing.module';
import { HistoryPageComponent } from 'src/app/shared/abstract-sources/history-page.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent extends HistoryPageComponent {
  paths = Paths;

  workHistory: Record<string, WorkItemObject>[] = [
    {
      'pt-BR': {
        title: 'Aplicativo Front-End Angular de Banco de Dados de Filmes',
        siteUrl: 'https://divaldojr-angular-movie-site.vercel.app/?l=pt-BR',
        codeUrl: 'https://github.com/DivaldoJr1001/angular-movie-site-frontend',
        description: 'Este projeto é um aplicativo de banco de dados de filmes desenvolvido usando Angular 18.10.0 e Angular Material. Ele integra a API do TMDB (The Movie Database) para buscar e exibir informações sobre filmes, incluindo detalhes como título, pôster, data de lançamento e classificações. Os usuários podem navegar por várias categorias de filmes e percorrer listas paginadas de resultados. O design responsivo do projeto pode se adaptar a telas tão pequenas quanto 320 px de largura.'
      },
      'en-US': {
        title: 'Front-End Angular Movie Database Application',
        siteUrl: 'https://divaldojr-angular-movie-site.vercel.app/?l=en-US',
        codeUrl: 'https://github.com/DivaldoJr1001/angular-movie-site-frontend',
        description: 'This project is a movie database application built using Angular 18.10.0 and Angular Material. It integrates with the TMDB (The Movie Database) API to fetch and display information about movies, including details such as title, poster, release date, and ratings. Users can browse various categories of movies and navigate through paginated lists of results. The project\'s responsive design can adapt to screens as small as 320px wide.'
      }
    }
  ];
}

interface WorkItemObject {
  title: string,
  codeUrl?: string,
  siteUrl?: string,
  description: string
}
