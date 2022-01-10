import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User()
  idUser: number
  confirmarSenha: string

  key = 'data'
  reverse = true

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService 

  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)

  }

  atualizar() {
    if (this.user.senha != this.confirmarSenha) {
      alert('A senha estão incorretas.')
    } else {
      this.auth.putUser(this.user).subscribe((resp: User) => {
        resp.tipo = environment.tipo
        resp.usuario = environment.usuario
        this.user = resp
        this.router.navigate(['/inicio'])

        alert('Usuário atualizado com Sucesso! Faça o login novamente')

        environment.nome = ''
        environment.foto = ''
        environment.tipo = ''
        environment.token = ''
        environment.usuario = ''
        environment.id = 0

        this.router.navigate(['/entrar'])
      })
    }

  }

  confirmaSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  findByIdUser(id: number){
    this.auth.getByIdUser(id).subscribe((resp) => {
      this.user = resp
    })
  }

}
