import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {path:'', redirectTo:'entrar', pathMatch:'full'},
  {path:'entrar', component: EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent},
  
  {path: 'tema', component: TemaComponent},
  {path:'inicio', component: InicioComponent},
  
  {path: 'tema-edit/:id', component: TemaEditComponent}, //parâmetro por rota 'rota/:id'
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent},

  {path: 'user-edit/:id', component: UserEditComponent},
  {path: 'user-page/:id', component: UserPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
