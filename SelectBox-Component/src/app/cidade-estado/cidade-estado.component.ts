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

  estadoSelecionado: any;
  cidadeSelecionada: any;

  data: string[] = [];

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

  consultaMunicipios(estado:any){
    this.estadoSelecionado = estado.value.UF
    console.log("Estado Selecionado: ", this.estadoSelecionado);
    this.siglaUF = estado.value.UF;
    this.municipioEstadoService.getMunicipios(this.siglaUF).subscribe(data => {
      this.municipios = data.map(nomeMunicipio => ({
        id: nomeMunicipio.id,
        name: nomeMunicipio.nome
      }));
    })
  }

  atribuirValorGlobal(nomeMunicipio: string) {
    this.cidadeSelecionada = nomeMunicipio;
    console.log("Cidade Selecionada: ", this.cidadeSelecionada);
  }
}
