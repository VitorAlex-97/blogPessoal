import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user: User = new User()
  idUser: number

  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService

  ) { }

  ngOnInit(){
    window.scroll(0,0)
    
    if(environment.token == '') {
      //alert('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }

    this.auth.refreshToken()

    this.idUser = this.route.snapshot.params['id']

    this.findByIdUser()

  }

  findByIdUser() {
    this.auth.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    }) 
  }

  isUserlogin(){
    return this.idUser == environment.id? true : false
  }

}
