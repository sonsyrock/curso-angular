import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: any;

  cursos: string[];

  constructor(private cursosService: CursosService) { //Injeção de dependência 

    this.nomePortal = 'http://loiane.training';

    //var servico = new CursosService();

    this.cursos=this.cursosService.getCursos();

  }

  ngOnInit(): void {
  }

}
