import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @ViewChild('modalDesarrollo', { read: TemplateRef })
  modalDesarrollo: TemplateRef<any>

  @ViewChild('modalOrganizacion', { read: TemplateRef })
  modalOrganizacion: TemplateRef<any>

  @ViewChild('modalCompromiso', { read: TemplateRef })
  modalCompromiso: TemplateRef<any>

  @ViewChild('modalCreatividad', { read: TemplateRef })
  modalCreatividad: TemplateRef<any>

  constructor( private modalService: NgbModal) { 
    
  }

  ngOnInit(): void {
  }

  abrirModalDesarrollo(){
    this.modalService.open(this.modalDesarrollo);
    //this.modalService.open(this.modalOrganizacion);
   
  }

  abrirModalOrganizacion(){
    this.modalService.open(this.modalOrganizacion);
    //this.modalService.open(this.modalOrganizacion);
   
  }

  abrirModalCompromiso(){
    this.modalService.open(this.modalCompromiso);
    //this.modalService.open(this.modalOrganizacion);
   
  }

  abrirModalCreatividad(){
    this.modalService.open(this.modalCreatividad);
    //this.modalService.open(this.modalOrganizacion);
   
  }

}
