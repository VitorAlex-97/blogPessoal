import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto

  constructor(
    private router: Router

  ) { }

  ngOnInit(){
  }

  sair() {
    environment.nome = ''
    environment.foto = ''
    environment.tipo = ''
    environment.token = ''
    environment.usuario = ''
    environment.id = 0

    this.router.navigate(['/entrar'])

  }

}
