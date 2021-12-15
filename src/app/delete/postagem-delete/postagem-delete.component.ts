import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  postagem: Postagem = new Postagem()
  idPostagem: number 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private postagemSevice: PostagemService

  ) { }

  ngOnInit(){
    
    window.scroll(0,0)

    if(environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.idPostagem = this.route.snapshot.params['id']
    this.findByIdPostagem()
  }

  apagar(){
    this.postagemSevice.deletePostagem(this.idPostagem).subscribe(() => {
      alert('Postagem apagada com sucesso')
    })
  }

  findByIdPostagem(){
    this.postagemSevice.getByIdPostagem(this.idPostagem).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

}
