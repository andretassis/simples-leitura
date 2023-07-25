import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuralCitacaoComponent } from './componentes/citacoes/mural-citacao/mural-citacao.component';
import { CriarCitacaoComponent } from './componentes/citacoes/criar-citacao/criar-citacao.component';
import { ExcluirCitacaoComponent } from './componentes/citacoes/excluir-citacao/excluir-citacao.component';
import { EditarCitacaoComponent } from './componentes/citacoes/editar-citacao/editar-citacao.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'meu-mural',
    component: MuralCitacaoComponent
  },
  {
    path: 'criar-citacao',
    component: CriarCitacaoComponent
  },
  {
    path: 'citacoes/excluir-citacao/:id',
    component: ExcluirCitacaoComponent
  },
  {
    path: 'citacoes/editar-citacao/:id',
    component: EditarCitacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
