import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  jobs: Job[];

  constructor() {}

  ngOnInit(): void {
    this.defineJobs();
  }

  defineJobs() {
    this.jobs = [
      {
        id: '1',
        dates: 'Octubre 2021 - Marzo 2022',
        title: 'Project Manager',
        location: 'Valkiria Consultora, Santiago de Chile, Chile',
        description:
          'Mis tareas eran llevar a cabo la coordinación de equipo, la gestión de proyectos, testing manual y revision de funcionalidades con el equipo, mediar con clientes y crear los procesos necesarios para lograr el objetivo de implementar metodologías ágiles como Scrum.',
        class: 'left',
      },
      {
        id: '2',
        dates: 'Septiembre 2021 - Octubre 2021',
        title: 'Software Engineer',
        location: 'Codefire, Viña del Mar, Chile',
        description:
          'Mis tareas eran programación frontend con Angular y TypeScript, análisis de interfaces gráficas y manejo de metodologías ágiles.',
        class: 'right',
      },
      {
        id: '3',
        dates: 'Marzo 2021 - Agosto 2021',
        title: 'Developer JR. .NET fullstack',
        location: 'Intellexis, Buenos Aires, Argentina',
        description:
          'Mis tareas eran llevar a cabo la coordinación de equipo, la gestión de proyectos, testing manual y revision de funcionalidades con el equipo, mediar con clientes y crear los procesos necesarios para lograr el objetivo de implementar metodologías ágiles como Scrum.',
        class: 'left',
      },
      {
        id: '4',
        dates: 'Agosto 2020 - Enero 2021',
        title: 'Help Desk',
        location: 'Sion Internet, Buenos Aires, Argentina',
        description:
          ' Mis tareas eran gestionar los tickets de forma rápida y ágil, dando soluciones inmediatas al cliente, evaluación y derivación de casos. Desde la parte humanística, colaborar con mi equipo día a día para lograr un mejor desempeño en conjunto.',
        class: 'right',
      },
      {
        id: '5',
        dates: 'Marzo 2019 - Noviembre 2019',
        title: 'Nanotechnology Developer',
        location: 'UAI, Buenos Aires, Argentina',
        description:
          'Mis tareas eran elaborar el desarrollo completo de un sistema de salud preventivo, que envuelve el desarrollo de un chip que contenía nanotecnología, para pacientes con hipertensión, entre otras patologías. Como también generar y crear la idea de negocio, análisis de mercado, análisis financiero y proyección de ganancias. Desde la parte humanística a su vez, dirigir al equipo como líder, en tomas de decisiones y colaborar para llegar a los objetivos propuestos.',
        class: 'left',
      },
    ];
  }

  ngAfterViewInit() {
    this.insertAosAnimation();
  }

  insertAosAnimation() {
    this.jobs.forEach((j) => {
      let card = document.querySelector('#' + j.class + j.id) as HTMLElement;

      if (j.class == 'left') {
        card.setAttribute('data-aos', 'fade-left');
      } else {
        card.setAttribute('data-aos', 'fade-right');
      }
    });
  }
}
