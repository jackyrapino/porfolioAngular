import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  public texto: string ; 
  

  constructor() { }

  ngOnInit(): void {
    this.inicializarTexto();
  }

  negrita(palabras:string[]){

    palabras.forEach(palabra => {
      this.texto = this.texto.replace(palabra, `<strong>${palabra}</strong>`) 
    });

    

  }
  
  inicializarTexto(){
    this.texto="Desde los 16 años encontré una pasión por crear nuevas soluciones que mejoren la vida de las personas a través de la innovación y la tecnología. Algunos de mis proyectos fueron Airbag y NTM nanotecnología medicinal, los cuales, felizmente pude exponer frente a jurados y ganaron menciones en el camino del emprendedurismo. En esos momentos, me prometí continuar con la meta de seguir creciendo en lo que más me gusta. Por eso en el 2020 comencé la carrera de Ingeniería en Sistemas Informáticos. Actualmente curso 3er año y próximamente recibiré el título de Analista en Sistemas Informáticos. En estos años tuve oportunidad de trabajar en distintos roles, como Desarrolladora, Software Engineer, Project Manager, entre otras, como también tuve oportunidad de trabajar para otro país. Hoy estoy expectante y atenta a nuevas oportunidades de crecer aún más en lo que me apasiona."
    this.negrita(["innovación", "tecnología", "Airbag", "NTM nanotecnología medicinal", "ganaron menciones", "Ingeniería en Sistemas Informáticos", "Desarrolladora, Software Engineer, Project Manager", "trabajar para otro país","nuevas oportunidades de crecer"])
  }
}
