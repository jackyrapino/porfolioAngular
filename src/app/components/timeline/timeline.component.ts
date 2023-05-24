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
        id: '0',
        dates: 'Mayo 2022 - Actualidad',
        title: 'Fullstack Developer',
        location: 'Eppical, Buenos Aires, Argentina',
        description:
          'Me enfoco en programar en .NET Core, Angular y SQL Server. Utilizo Git para controlar versiones del código, realizo pruebas manuales y trabajo bajo la metodología ágil Scrum. Además, colaboro activamente con el equipo de desarrollo, participando en reuniones, compartiendo conocimientos y trabajando en estrecha colaboración para alcanzar nuestros objetivos comunes.',
        class: 'left',
      },
      {
        id: '1',
        dates: 'Octubre 2021 - Marzo 2022',
        title: 'Project Manager',
        location: 'Valkiria Consultora, Santiago de Chile, Chile',
        description:
          'Mis responsabilidades incluían coordinar y gestionar equipos, realizar pruebas manuales y revisar funcionalidades junto al equipo. Además, actuaba como intermediario con los clientes y creaba los procesos necesarios para implementar metodologías ágiles, como Scrum, con el objetivo de lograr una mayor eficiencia en el desarrollo de proyectos.',
        class: 'right',
      },
      {
        id: '2',
        dates: 'Septiembre 2021 - Octubre 2021',
        title: 'Software Engineer',
        location: 'Codefire, Viña del Mar, Chile',
        description:
          'Me encargaba de la programación frontend utilizando Angular y TypeScript. Además, realizaba análisis de interfaces gráficas y trabajaba con metodologías ágiles.',
        class: 'left',
      },
      {
        id: '3',
        dates: 'Marzo 2021 - Agosto 2021',
        title: 'Developer .NET fullstack',
        location: 'Intellexis, Buenos Aires, Argentina',
        description:
          'Mis principales responsabilidades incluían la programación utilizando ASP.NET, Razor y SQL Server. Además, realizaba el análisis de requerimientos para entender las necesidades del proyecto. También me encargaba del testing para garantizar la calidad del software desarrollado. Además, gestionaba reuniones con clientes para discutir avances, realizar demostraciones y asegurar su satisfacción con el producto final.',
        class: 'right',
      },
      {
        id: '4',
        dates: 'Agosto 2020 - Enero 2021',
        title: 'Help Desk',
        location: 'Sion Internet, Buenos Aires, Argentina',
        description:
          'Me encargaba de gestionar los tickets de manera ágil y eficiente, brindando soluciones inmediatas a los clientes y evaluando y derivando casos según corresponda. Además, colaboraba activamente con mi equipo, trabajando juntos para mejorar nuestro desempeño diario y alcanzar nuestros objetivos de manera conjunta.',
        class: 'left',
      },
      {
        id: '5',
        dates: 'Marzo 2019 - Noviembre 2019',
        title: 'Nanotechnology Developer',
        location: 'UAI, Buenos Aires, Argentina',
        description:
          'Mis tareas eran elaborar el desarrollo completo de un sistema de salud preventivo, que envuelve el desarrollo de un chip que contenía nanotecnología, para pacientes con hipertensión, entre otras patologías. Como también generar y crear la idea de negocio, análisis de mercado, análisis financiero y proyección de ganancias. Desde la parte humanística a su vez, dirigir al equipo como líder, en tomas de decisiones y colaborar para llegar a los objetivos propuestos.',
        class: 'right',
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
