import { CidadeEstadoService } from './cidade-estado.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cidade-estado',
  templateUrl: './cidade-estado.component.html',
  styleUrls: ['./cidade-estado.component.scss']
})
export class CidadeEstadoComponent implements OnInit{

  estados: any[] = [];
  municipios: any[] = [];
  siglaUF: any;

  constructor(
    private estadoService: CidadeEstadoService,
    private municipioEstadoService: CidadeEstadoService){

  }

  ngOnInit(): void {
    this.consultaEstado();
  }

  consultaEstado(){
    this.estadoService.getEstados().subscribe(data => {
      this.estados = data.map(estado => ({
        id: estado.id,
        UF: estado.sigla,
      }));
    })
  }

  consultaMunicipios(municipio:any){
    console.log(municipio.value.text)

    this.siglaUF = municipio.value.UF;
    this.municipioEstadoService.getMunicipios(this.siglaUF).subscribe(data => {
      this.municipios = data.map(nomeMunicipio => ({
        id: nomeMunicipio.id,
        text: nomeMunicipio.nome
      }))
    })




  }
}
